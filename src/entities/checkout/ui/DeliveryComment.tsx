import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { CheckoutFormValues } from '../model/checkoutSchema'; // путь к вашим типам

interface DeliveryCommentProps {
    register: UseFormRegister<CheckoutFormValues>; 
}



export const DeliveryComment = ({ register }: DeliveryCommentProps) => {
    return (
        <div className="bg-white">
            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center font-bold">4</span>
                Comment (optional)
            </h2>
            <textarea
                {...register('comment')}
                placeholder="Any wishes for your order..."
                rows={3}
                className="border border-gray-200 rounded-lg px-4 py-2.5 w-full text-sm focus:outline-none focus:border-amber-600 transition-colors resize-none"
            />
        </div>
    )
}
