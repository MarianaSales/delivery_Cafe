import { useFormContext } from 'react-hook-form';

import { CreditCard, Money, Wallet } from 'phosphor-react';
import { PaymentOptionsContainer } from './styles';
import { PaymentMethodSelected } from '../PaymentMethod';
import { Text } from '../../../../components/Typography';

export const paymentMethodos = {
    credit: {
        label: 'Cartão de Crédito',
        icon: <CreditCard size={16} />,
    },
    debit: {
        label: 'Cartão de Débito',
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

    const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

    return (
        <PaymentOptionsContainer>
            {Object.entries(paymentMethodos).map(([key, { label, icon }]) => (
                <PaymentMethodSelected
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
