import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { PaymentMethodContainer, PaymentMethodContent } from './styles';

type PaymentMethodProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode;
    label: string;
};

export const PaymentMethod = forwardRef<HTMLInputElement, PaymentMethodProps>(
    ({ id, icon, label, ...props }, ref) => {
        return (
            <PaymentMethodContainer>
                <input type="radio" id={id} {...props} name="paymentMethod" ref={ref} />
                <label htmlFor={id}>
                    <PaymentMethodContent>
                        {icon}
                        {label}
                    </PaymentMethodContent>
                </label>
            </PaymentMethodContainer>
        );
    }
);
