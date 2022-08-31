import { Title } from '../../../../components/Typography';
import { coffees } from '../../../../util/coffees';
import { CoffeeCards } from '../CoffeeCards';
import { CoffeeDisplayContainer, CoffeeDisplayList } from './styles';

export function CoffeeDisplay() {
    return (
        <CoffeeDisplayContainer className="container">
            <Title size="l" color="grey_800">
                Nossos cafés
            </Title>

            <CoffeeDisplayList>
                {coffees.map((coffee) => (
                    <CoffeeCards key={coffee.id} coffee={coffee} />
                ))}
            </CoffeeDisplayList>
        </CoffeeDisplayContainer>
    );
}
