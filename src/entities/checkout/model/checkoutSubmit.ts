import { checkoutSchema, CheckoutFormValues } from '@entities/checkout/model/checkoutSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useCartStore } from '@entities/cart/model/cartStore'
import { pb } from '@shared/lib/pocketbase'
import { useRouter } from 'next/navigation'

export const checkoutSubmit = () => {
    const { items, getTotalPrice, clearCart } = useCartStore()
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutSchema),
    })

    const onSubmit = async (data: CheckoutFormValues) => {
        try {
            const oreder = await pb.collection('orders').create({
                user: pb.authStore.record?.id,
                items: JSON.stringify(items),
                total: getTotalPrice(),
                status: 'pending',
                firstname: data.firstname,
                lastname: data.lastname,
                phone: data.phone,
                address: data.address,
            })
            clearCart()
            console.log('Order created:', `/checkout/success?orderId=${oreder.id}`)
            router.push(`/checkout/success?orderId=${oreder.id}`)
        } catch (err: any) {
            console.log('Error data:', JSON.stringify(err?.data, null, 2))
            alert('Something went wrong. Please try again.')
        }
    }

    return { register, handleSubmit, errors, isSubmitting, onSubmit, items, getTotalPrice }
}