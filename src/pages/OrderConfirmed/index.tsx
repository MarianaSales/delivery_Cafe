import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { InformationIcons } from '../../components/InformationIcons';
import { Text, Title } from '../../components/Typography';
import { OrdersData } from '../Orders';

import { OrderConfirmedContainer, OrderConfirmedDetailsContainer } from './styles';
import deliveryImg from '../../assets/img/motoboy.svg';
import { paymentMethodos } from '../Orders/components/OrdersForm/PaymentOptions';
import { useEffect } from 'react';
interface LocationType {
    state: OrdersData;
}

export function OrderConfirmed() {
    const theme = useTheme();
    const { state } = useLocation() as unknown as LocationType;
    const navigate = useNavigate();

    useEffect(() => {
        if (!state) {
            navigate('/');
        }
    }, []);
    if (!state) return <></>;

    return (
        <OrderConfirmedContainer className="container">
            <div>
                <Title size="l">Uhu! Pedido confirmado</Title>
                <Text size="l" color="grey_800">
                    Agora é só aguardar que logo o café chegará até você
                </Text>
            </div>

            <section>
                <OrderConfirmedDetailsContainer>
                    <InformationIcons
                        icon={<MapPin weight="fill" />}
                        iconColor={theme['purple_500']}
                        text={
                            <Text>
                                Entrega em{' '}
                                <strong>
                                    {state.street}, {state.number}
                                </strong>{' '}
                                <br />
                                {state.district}, {state.city}, {state.uf}
                            </Text>
                        }
                    />
                    <InformationIcons
                        icon={<Clock weight="fill" />}
                        iconColor={theme['yellow_500']}
                        text={
                            <Text>
                                Previsão de entrega
                                <br />
                                <strong>20min - 30min</strong>
                            </Text>
                        }
                    />
                    <InformationIcons
                        icon={<CurrencyDollar weight="fill" />}
                        iconColor={theme['yellow_700']}
                        text={
                            <Text>
                                Pagamento na entrega
                                <br />
                                <strong>{paymentMethodos[state.paymentMethod].label}</strong>
                            </Text>
                        }
                    />
                </OrderConfirmedDetailsContainer>
                <img src={deliveryImg} alt="Homem em uma moto" />
            </section>
        </OrderConfirmedContainer>
    );
}
