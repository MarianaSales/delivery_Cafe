import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { ContentContainer, PaymentMethodContainer } from './styles';

type PaymentMethodSelectedProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode;
    label: string;
};

export const PaymentMethodSelected = forwardRef<HTMLInputElement, PaymentMethodSelectedProps>(
    ({ id, icon, label, ...props }, ref) => {
        return (
            <PaymentMethodContainer>
                <input type="radio" id={id} {...props} name="paymentMethod" ref={ref} />
                <label htmlFor={id}>
                    <ContentContainer>
                        {icon}
                        {label}
                    </ContentContainer>
                </label>
            </PaymentMethodContainer>
        );
    }
);
