import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react';
import {
    LandingPageContainer,
    LandingPageContent,
    LandingPageItens,
    LandingPageTitle,
} from './styles';
import coffee from '../../../../assets/img/coffee.svg';
import { Text } from '../../../../components/Typography';
import { InformationIcons } from '../../../../components/InformationIcons';
import { useTheme } from 'styled-components';

export function LandingPage() {
    const theme = useTheme();
    return (
        <LandingPageContainer className="container">
            <LandingPageContent>
                <div>
                    <section>
                        <LandingPageTitle size="xl" color="grey_900">
                            Encontre o café perfeito para qualquer hora do dia
                        </LandingPageTitle>
                        <Text as="h3" size="s" color="grey_700">
                            Com o Kiki's Delivery Service você recebe seu café onde estiver, a
                            qualquer hora.
                        </Text>
                    </section>

                    <LandingPageItens>
                        <InformationIcons
                            icon={<ShoppingCartSimple weight="fill" />}
                            text="Compra simples e segura"
                            iconColor={theme.yellow_700}
                        />
                        <InformationIcons
                            icon={<Package weight="fill" />}
                            text="Embalagem mantém o café intacto"
                            iconColor={theme.grey_700}
                        />
                        <InformationIcons
                            icon={<Timer weight="fill" />}
                            text="Entrega rápida e rastreada"
                            iconColor={theme.yellow_500}
                        />
                        <InformationIcons
                            icon={<Coffee weight="fill" />}
                            text="O café chega fresquinho até você"
                            iconColor={theme.purple_500}
                        />
                    </LandingPageItens>
                </div>
                <img src={coffee} alt="" />
            </LandingPageContent>
        </LandingPageContainer>
    );
}
