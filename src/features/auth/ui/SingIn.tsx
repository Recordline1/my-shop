'use client';

import { pb } from "@shared/lib/pocketbase";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signInSchema, type SignInFormValues } from "../model/signInSchema";
import Link from "next/link";

export const gradient = {
    background: 'linear-gradient(135deg, #2d2d2d 0%, #3d3535 40%, #2d2d2d 100%)',
    boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.05)'
}
export const SingIn = ({close}:{close: () => void}) => {
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
        <div className="bg-white p-6 rounded-lg shadow-md" style={gradient}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-center "
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
            <div className="mt-4 pt-3 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-500">
                    No account?{' '}
                    <Link
                        href="/auth"
                        onClick={() => close()}
                        className="text-amber-600 hover:text-amber-700 font-medium"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}