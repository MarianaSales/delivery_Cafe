import { CurrencyCircleDollar, MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { Title } from '../../../../components/Typography';
import { OrdersContainer, Section } from '../../styles';
import { Sections } from '../Sections';
import { AddressesForm } from './components/AddressesFrom';
import { FormSections } from './styles';

export function OrdersForm() {
    const theme = useTheme();

    return (
        <OrdersContainer>
            <Title size="xs" color="grey_800">
                Complete seu pedido
            </Title>
            <FormSections>
                <Sections
                    title="Endereço de Entrega"
                    subtitle="Informe o endereço para entrega"
                    icon={<MapPin size={22} color={theme['yellow_700']} />}
                />

                <AddressesForm />
            </FormSections>
            <FormSections>
                <Sections
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    icon={<CurrencyCircleDollar size={22} color={theme['purple_300']} />}
                />
            </FormSections>
        </OrdersContainer>
    );
}
