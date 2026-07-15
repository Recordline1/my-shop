import { NovaPoshtaIcon } from '@/shared/icons/nova_poshta'
import { MapPin } from 'lucide-react'
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { CheckoutFormValues } from '../model/checkoutSchema'; // путь к вашим типам

interface DeliveryOptionsProps {
    register: UseFormRegister<CheckoutFormValues>;
    errors: FieldErrors<CheckoutFormValues>;
    deliveryType: string;
}


export const DeliveryOptions = ({ register, errors, deliveryType }: DeliveryOptionsProps) => {
    return (
        <div>
            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center font-bold">2</span>
                Delivery
            </h2>
            <div className="bg-white mb-4 border border-gray-100 rounded-xl  shadow-sm">
                <div className="flex flex-col gap-2 mb-4">
                    {[
                        { value: 'nova_poshta', label: 'Nova Poshta' },
                        { value: 'courier', label: 'Courier delivery' },
                        { value: 'pickup', label: 'Pickup' },
                    ].map(option => (
                        <label
                            key={option.value}
                            className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition-colors
                                             ${deliveryType === option.value
                                    ? 'border-amber-600 bg-amber-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <input
                                type="radio"
                                value={option.value}
                                {...register('delivery_type')}
                                className="accent-amber-600"
                            />
                            <span className="text-sm font-medium text-gray-900">{option.label}</span>
                            {'nova_poshta' === option.value && <NovaPoshtaIcon className="w-6 h-6 text-amber-600" />}
                        </label>
                    ))}
                </div>
                {errors.delivery_type && <p className="text-red-500 text-xs mb-3">{errors.delivery_type.message}</p>}
                {deliveryType === 'nova_poshta' && (
                    <div className="flex flex-col gap-3">
                        <div>
                            <label className="text-xs text-gray-500 mb-1 block">City</label>
                            <input
                                {...register('nova_poshta_city')}
                                placeholder="Kyiv"
                                className="border border-gray-200 rounded-lg px-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors"
                            />
                            {errors.nova_poshta_city && <p className="text-red-500 text-xs mt-1">{errors.nova_poshta_city.message}</p>}
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 mb-1 block">Branch number</label>
                            <input
                                {...register('nova_poshta_branch')}
                                placeholder="Branch №1"
                                className="border border-gray-200 rounded-lg px-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors"
                            />
                            {errors.nova_poshta_branch && <p className="text-red-500 text-xs mt-1">{errors.nova_poshta_branch.message}</p>}
                        </div>
                    </div>
                )}
                {deliveryType === 'courier' && (
                    <div className="relative">
                        <label className="text-xs text-gray-500 mb-1 block">Delivery only in Kyiv, Kharkiv and Odesa</label>
                        <MapPin size={16} className="absolute left-3 top-8 text-gray-400" />
                        <textarea
                            {...register('address')}
                            placeholder="City, street, building"
                            rows={3}
                            className="border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors resize-none"
                        />
                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                    </div>
                )}
                {deliveryType === 'pickup' && (
                    <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
                        <p className="text-sm flex gap-2 items-center"><MapPin size={16} /> Our address: Kyiv, Khreshchatyk st, 1</p>
                        <p className="text-xs text-gray-500 mt-1">Mon–Sat 9:00–20:00</p>
                    </div>
                )}
            </div>
        </div>
    )
}