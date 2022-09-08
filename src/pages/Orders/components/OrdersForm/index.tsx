import { CurrencyCircleDollar, MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { Title } from '../../../../components/Typography';
<<<<<<< Updated upstream
import { Sections } from '../Sections';
import { AddressesForm } from './components/AddressesFrom';
import { PaymentOptions } from './components/PaymentOptions';
import { FormSections, Label, OrdersFromContainer } from './styles';
=======
import { OrdersContainer } from '../../styles';
import { Sections } from '../Sections';
import { AddressesForm } from './AddressesFrom';
import { FormSections, OrdersFromContainer } from './styles';
>>>>>>> Stashed changes

export function OrdersForm() {
    const theme = useTheme();

    return (
<<<<<<< Updated upstream
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
                {/* </FormSections>
            <FormSections> */}
                <Sections
                    title="Pagamento"
                    subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                    icon={<CurrencyCircleDollar size={30} color={theme['purple_700']} />}
                />
                <PaymentOptions />
            </FormSections>
        </OrdersFromContainer>
=======
        <OrdersContainer>
            <OrdersFromContainer>
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
            </OrdersFromContainer>
            <OrdersFromContainer>
                <FormSections>
                    <Sections
                        title="Pagamento"
                        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                        icon={<CurrencyCircleDollar size={22} color={theme['purple_300']} />}
                    />
                </FormSections>
            </OrdersFromContainer>
        </OrdersContainer>
>>>>>>> Stashed changes
    );
}
