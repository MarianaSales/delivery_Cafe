import { Title } from '../../../../components/Typography';
import { CoffeeDisplayContainer } from './styles';

export function CoffeeDisplay() {
    return (
        <CoffeeDisplayContainer className="container">
            <Title size="l" color="grey_800">
                Nossos cafés
            </Title>
        </CoffeeDisplayContainer>
    );
}
