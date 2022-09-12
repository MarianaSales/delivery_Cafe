import { CurrencyCircleDollar, MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { Title } from '../../../../components/Typography';
import { Sections } from '../Sections';
import { AddressesForm } from './AddressesFrom';
import { PaymentOptions } from './PaymentOptions';
import { FormSections, OrdersFromContainer } from './styles';

export function OrdersForm() {
    const theme = useTheme();

    return (
        <OrdersFromContainer>
            <Title size="s" color="grey_800">
                Complete seu pedido
            </Title>
            <FormSections>
                <Sections
                    title="Endereço de Entrega"
                    subtitle="Informe o endereço para entrega"
                    icon={<MapPinLine size={22} color={theme['yellow_700']} />}
                />
                <AddressesForm />
            </FormSections>
            <FormSections>
                <Sections
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    icon={<CurrencyCircleDollar size={22} color={theme['purple_500']} />}
                />
                <PaymentOptions />
            </FormSections>
        </OrdersFromContainer>
    );
}
