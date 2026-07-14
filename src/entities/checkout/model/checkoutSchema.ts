import { z } from 'zod'

export const deliveryTypes = ['pickup', 'nova_poshta', 'courier'] as const
export const paymentTypes = ['cash', 'card', 'online'] as const

export const checkoutSchema = z.object({
    firstname: z.string().min(2, 'First name is required'),
    lastname: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone is required'),
    delivery_type: z.enum(deliveryTypes, { message: 'Select delivery type' }),
    address: z.string().min(5, 'Address is required').optional().or(z.literal('')),
    nova_poshta_city: z.string().optional(),
    nova_poshta_branch: z.string().optional(),
    payment_type: z.enum(paymentTypes, { message: 'Select payment type' }),
    comment: z.string().optional(),
}).refine(data => {
    if (data.delivery_type === 'nova_poshta') {
        return !!data.nova_poshta_city && !!data.nova_poshta_branch
    }
    if (data.delivery_type === 'courier') {
        return !!data.address && data.address.length >= 5
    }
    return true
}, {
    message: 'Please fill in delivery details',
    path: ['address'],
})

export type CheckoutFormValues = z.infer<typeof checkoutSchema>