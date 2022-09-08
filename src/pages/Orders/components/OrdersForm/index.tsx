import { CurrencyCircleDollar, MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { Title } from '../../../../components/Typography';
import { Sections } from '../Sections';
import { AddressesForm } from './AddressesFrom';
import { PaymentOptions } from './PaymentOptions';
import { FormSections, Label, OrdersFromContainer } from './styles';

export function OrdersForm() {
    const theme = useTheme();

    return (
        <OrdersFromContainer>
            <Label>
                <Title size="s" color="grey_800">
                    Complete seu pedido
                </Title>
            </Label>
            <FormSections>
                <Sections
                    title="Endereço de Entrega"
                    subtitle="Informe o endereço para entrega"
                    icon={<MapPin size={22} color={theme['yellow_700']} />}
                />

                <AddressesForm />
                <Sections
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    icon={<CurrencyCircleDollar size={22} color={theme['purple_300']} />}
                />
                <PaymentOptions />
            </FormSections>
        </OrdersFromContainer>
    );
}
