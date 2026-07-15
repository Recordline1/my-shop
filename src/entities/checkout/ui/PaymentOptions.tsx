import { CreditCard, Banknote, Landmark } from 'lucide-react'
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { CheckoutFormValues } from '../model/checkoutSchema';
import { useState } from 'react';
import { PatternFormat } from 'react-number-format';
interface PaymentOptionsProps {
    register: UseFormRegister<CheckoutFormValues>;
    errors: FieldErrors<CheckoutFormValues>;
    paymentTypes: CheckoutFormValues['payment_type'];
}


export const PaymentOptions = ({ register, errors, paymentTypes }: PaymentOptionsProps) => {

    const [cardData, setCardData] = useState({ number: '', expiry: '', cvc: '' });

    return (
        <div className="bg-white">
            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                Payment
            </h2>

            <div className="flex flex-col gap-2">
                {[
                    { value: 'card', label: 'Card online', icon: <CreditCard size={16} className="text-gray-400" /> },
                    { value: 'cash', label: 'Cash on delivery', icon: <Banknote size={16} className="text-gray-400" /> },
                    { value: 'online', label: 'Online banking', icon: <Landmark size={16} className="text-gray-400" /> },
                ].map(option => (
                    <label
                        key={option.value}
                        className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 cursor-pointer transition-colors has-[:checked]:border-amber-600 "
                    >
                        <input
                            type="radio"
                            value={option.value}
                            {...register('payment_type')}
                            className="accent-amber-600"
                        />
                        <span className="text-sm font-medium text-gray-900">{option.label}</span>
                        {option.icon}
                    </label>
                ))}
            </div>
            {errors.payment_type && <p className="text-red-500 text-xs mt-2">{errors.payment_type.message}</p>}
            {paymentTypes === 'card' && (
                <div className="mt-4 p-4 border border-amber-200 bg-amber-50 rounded-xl space-y-3 animate-in fade-in duration-300">
                    <p className="text-sm font-medium text-amber-900">Enter card details</p>
                    <PatternFormat
                        format="#### #### #### ####"
                        placeholder="0000 0000 0000 0000"
                        className="w-full p-2.5 rounded-lg border border-amber-200 text-sm"
                        onValueChange={(v) => setCardData(prev => ({ ...prev, number: v.value }))}
                    />
                    <div className="flex gap-2">
                        <PatternFormat
                            format="##/##"
                            placeholder="MM/YY"
                            className="w-full p-2.5 rounded-lg border border-amber-200 text-sm"
                            onValueChange={(v) => setCardData(prev => ({ ...prev, expiry: v.value }))}
                        />
                        <PatternFormat
                            format="###"
                            placeholder="CVC"
                            className="w-full p-2.5 rounded-lg border border-amber-200 text-sm"
                            onValueChange={(v) => setCardData(prev => ({ ...prev, cvc: v.value }))}
                        />
                    </div>
                </div>
            )}

            {paymentTypes === 'online' && (
                <div className="mt-4 p-4 border border-blue-200 bg-blue-50 rounded-xl">
                    <p className="text-sm text-blue-800">You will be redirected to the banking app.</p>
                </div>
            )}

        </div>
    )
}