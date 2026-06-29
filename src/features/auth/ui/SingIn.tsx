'use client';

import { pb } from "@shared/lib/pocketbase";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signInSchema, type SignInFormValues } from "../model/signInSchema";

export const SingIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormValues>({ resolver: zodResolver(signInSchema) });
    const router = useRouter();

    const onSubmit = async (data: SignInFormValues) => {
        try {
            const authData = await pb.collection('users').authWithPassword(data.email, data.password);
            document.cookie = `pb_auth=${authData.token}; path=/; max-age=604800`
            router.push('/')
            router.refresh()
        } catch (err: any) {
            console.log(err);
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-4 shadow-sm bg-cyan-100"
        >
            <input
                className="mb-2 border rounded-md p-2 border-gray-300 bg-white w-full"
                {...register('email')} type="email" placeholder="Email" />
            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
            <div className="mb-2 w-full relative">
                <input
                    className="border rounded-md p-2 border-gray-300 bg-white w-full pr-10"
                    {...register('password')} type={showPassword ? 'text' : 'password'} placeholder="Password" />
                <button type="button" onClick={() => setShowPassword((s) => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 transform duration-300 px-4 rounded shadow-lg shadow-blue-950/30 cursor-pointer"
            >
                {isSubmitting ? 'Login...' : 'Login'}
            </button>
        </form>
    )
}