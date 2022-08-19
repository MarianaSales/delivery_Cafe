import { Coffee, Package, ShoppingCart } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { ThemeType } from '../../../../styles/themes/default';
import { Descriptions, IntroContainer, Item, LeftContainer, RightContainer } from './styles';
import coffee from '../../../../assets/img/coffee.svg';

export function HomeContainer() {
    const theme = useTheme() as ThemeType;

    return (
        <IntroContainer>
            <LeftContainer>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>

                <p>
                    Com o Kiki's Delivery Service você recebe seu café onde estiver, a qualquer hora
                </p>

                <Descriptions>
                    <Item background={theme.yellow_700}>
                        <ShoppingCart weight="fill" />
                        <span>Compra simple e segura</span>
                    </Item>

                    <Item background={theme.grey_700}>
                        <Package weight="fill" />
                        <span>A embalagem mantém o café intacto</span>
                    </Item>

                    <Item background={theme.purple_700}>
                        <Coffee weight="fill" />
                        <span>O café chega fresquinho até você</span>
                    </Item>
                </Descriptions>
            </LeftContainer>
            <RightContainer>
                <img src={coffee} alt="Copo de café" />
            </RightContainer>
        </IntroContainer>
    );
}
