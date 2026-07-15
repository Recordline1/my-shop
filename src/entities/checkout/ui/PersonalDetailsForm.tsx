import { User, Phone, Mail } from 'lucide-react'
import { UseFormRegister, FieldErrors, Controller, Control } from 'react-hook-form';
import { CheckoutFormValues } from '../model/checkoutSchema';
import { PatternFormat } from "react-number-format";
interface PersonalDetailsProps {
    register: UseFormRegister<CheckoutFormValues>;
    errors: FieldErrors<CheckoutFormValues>;
    control: Control<CheckoutFormValues>;
}


export const PersonalDetailsForm = ({ register, errors, control }: PersonalDetailsProps) => {
    return (
        <div className="bg-white ">
            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center font-bold">1</span>
                Personal details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-xs text-gray-500  block">First name *
                        <div className="relative mt-1">
                            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                {...register('firstname')}
                                placeholder="Tony"
                                className="border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors"
                            />
                        </div>
                    </label>
                    {errors.firstname && <p className="text-red-500 text-xs mt-1">{errors.firstname.message}</p>}
                </div>

                <div>
                    <label className="text-xs text-gray-500 block">Last name *
                        <div className="relative mt-1">
                            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                {...register('lastname')}
                                placeholder="Doe"
                                className="border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors"
                            />
                        </div>
                    </label>
                    {errors.lastname && <p className="text-red-500 text-xs mt-1">{errors.lastname.message}</p>}
                </div>
                <div className="sm:col-span-2">
                    <label className="text-xs text-gray-500 block">Email *
                        <div className="relative mt-1">
                            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                {...register('email')}
                                placeholder="Email"
                                className="border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors"
                            />
                        </div>
                    </label>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>


                <div className="sm:col-span-2">
                    <label className="text-xs text-gray-500 mb-1 block">Phone</label>
                    <div className="relative">
                        <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                                <PatternFormat
                                    value={field.value}
                                    onValueChange={(values) => field.onChange(values.value)}
                                    format="+380 (##) ###-##-##"
                                    mask="_"
                                    placeholder="+380 (__) ___-__-__"
                                    className="border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors"
                                />
                            )}
                        />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
            </div>
        </div>
    )
}