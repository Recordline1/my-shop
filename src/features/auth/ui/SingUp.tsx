'use client';

import { pb } from "@shared/lib/pocketbase";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { signUpSchema, type SignUpFormValues } from "../model/signUpSchema";


export const SingUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const { register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormValues>({ resolver: zodResolver(signUpSchema) });
    const router = useRouter();

    const onSubmit = async (data: SignUpFormValues) => {
        try {
            await pb.collection('users').create(data);
            router.push('/');
            router.refresh();
        } catch (err: any) {

            const errorMessage =
                err?.data?.message ||
                err?.message ||
                'Server error';

            alert(errorMessage);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center border border-gray-300 rounded-md p-4 shadow-sm bg-cyan-100"
        >
            <input
                className="mb-2 border rounded-md p-2 border-gray-300 bg-white w-full"
                {...register('name')} type="text" placeholder="Name" />
            {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
            <input
                className="mb-2 border rounded-md p-2 border-gray-300 bg-white w-full"
                {...register('email')} type="email" placeholder="Email" />
            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
            <div className="mb-2 w-full relative">
                <input
                    className="border rounded-md p-2 border-gray-300 bg-white w-full pr-10"
                    {...register('password')} type={showPassword ? 'text' : 'password'} placeholder="Password min 8 characters" />
                <button type="button" onClick={() => setShowPassword((s) => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>
            {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}

            <div className="mb-2 w-full relative">
                <input
                    className="border rounded-md p-2 border-gray-300 bg-white w-full pr-10"
                    {...register('passwordConfirm')} type={showConfirm ? 'text' : 'password'} placeholder="Confirm Password" />
                <button type="button" onClick={() => setShowConfirm((s) => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600">
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
            </div>
            {errors.passwordConfirm && <p className="text-sm text-red-600">{errors.passwordConfirm.message}</p>}
            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 transform duration-300 px-4 rounded shadow-lg shadow-blue-950/30 cursor-pointer"
            >
                {isSubmitting ? 'Signing up...' : 'Sign Up'}</button>
        </form>
    );
};