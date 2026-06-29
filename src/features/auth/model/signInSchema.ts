import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Minimum 8 characters'),
});

export type SignInFormValues = z.infer<typeof signInSchema>;