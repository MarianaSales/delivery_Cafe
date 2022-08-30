import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react';
import { LandingPageContainer, LandingPageContent, LandingPageTitle } from './styles';
import coffee from '../../../../assets/img/coffee.svg';
import { Text } from '../../../../components/Typography';
export function LandingPage() {
    return (
        <LandingPageContainer>
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

                    <LandingPageTitle>
                        <div>Compra simples e segura</div>
                        <p>Entrega rápida e rastreada</p>
                        <p>Embalagem mantém o café intacto</p>
                        <p>O café chega fresquinho até</p>
                    </LandingPageTitle>
                </div>
                <img src={coffee} alt="" />
            </LandingPageContent>
        </LandingPageContainer>
    );
}
