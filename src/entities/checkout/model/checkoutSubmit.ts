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
        watch,
        formState: { errors, isSubmitting },
    } = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            delivery_type: 'nova_poshta',
            payment_type: 'card',
        }
    })

    const deliveryType = watch('delivery_type')

    const onSubmit = async (data: CheckoutFormValues) => {
        try {
            const order = await pb.collection('orders').create({
                user: pb.authStore.record?.id,
                items: JSON.stringify(items),
                total: getTotalPrice(),
                status: 'pending',
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                phone: data.phone,
                delivery_type: data.delivery_type,
                address: data.address,
                nova_poshta_city: data.nova_poshta_city,
                nova_poshta_branch: data.nova_poshta_branch,
                payment_type: data.payment_type,
                comment: data.comment,
            })
            clearCart()
            router.push(`/checkout/success?orderId=${order.id}`)
        } catch (err: any) {
            console.log('Error data:', JSON.stringify(err?.data, null, 2))
            alert('Something went wrong. Please try again.')
        }
    }

    return { register, handleSubmit, watch, errors, isSubmitting, onSubmit, items, getTotalPrice, deliveryType }
}