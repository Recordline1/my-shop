import { z } from 'zod'

export const checkoutSchema = z.object({
    firstname: z.string().min(2, 'First name is required'),
    lastname: z.string().min(2, 'Last name is required'),
    phone: z.string().min(6, 'Phone is required'),
    address: z.string().min(5, 'Address is required'),
})

export type CheckoutFormValues = z.infer<typeof checkoutSchema>