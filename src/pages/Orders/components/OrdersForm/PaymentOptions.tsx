import { useFormContext } from 'react-hook-form';

import { CreditCard, Money, Wallet } from 'phosphor-react';
import { PaymentOptionsContainer } from './styles';
import { PaymentMethod } from '../PaymentMethod';
import { Text } from '../../../../components/Typography';

export const paymentMethodos = {
    credit: {
        label: 'Cartão de crédito',
        icon: <CreditCard size={16} />,
    },
    debit: {
        label: 'Cartão de débito',
        icon: <Wallet size={16} />,
    },
    money: {
        label: 'Dinheiro',
        icon: <Money size={16} />,
    },
};
export function PaymentOptions() {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const paymentMethodError = errors?.paymentMethods?.message as unknown as string;

    return (
        <PaymentOptionsContainer>
            {Object.entries(paymentMethodos).map(([key, { label, icon }]) => (
                <PaymentMethod
                    key={label}
                    icon={icon}
                    label={label}
                    value={key}
                    {...register('paymentMethod')}
                />
            ))}
            {paymentMethodError && <Text>{paymentMethodError}</Text>}
        </PaymentOptionsContainer>
    );
}
