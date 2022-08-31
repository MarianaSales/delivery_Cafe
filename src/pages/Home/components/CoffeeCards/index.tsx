import {
    CoffeeCardsContainer,
    CoffeeCardsDescription,
    CoffeeCardsFooter,
    CoffeeName,
    Tags,
} from './styles';
import { Coffees } from '../../../../components/interfaces';
import { useState } from 'react';
import { Text, Title } from '../../../../components/Typography';
import { formatMoney } from '../../../../util/formatMoney';

interface CoffeeProps {
    coffee: Coffees;
}
export function CoffeeCards({ coffee }: CoffeeProps) {
    const [quantity, setQuantity] = useState(1);

    const formattedPrice = formatMoney(coffee.price);

    return (
        <CoffeeCardsContainer>
            <img src={`/coffees/${coffee.photo}`} />
            <Tags>
                {coffee.tags.map((tag) => (
                    <span key={`S{coffee.id}${tag}`}>{tag}</span>
                ))}
            </Tags>

            <CoffeeName>{coffee.name}</CoffeeName>

            <CoffeeCardsDescription>{coffee.description}</CoffeeCardsDescription>

            <CoffeeCardsFooter>
                <div>
                    <Text size="s">R$</Text>
                    <Title size="m" color="grey_700" as="strong">
                        {formattedPrice}
                    </Title>
                </div>
            </CoffeeCardsFooter>
        </CoffeeCardsContainer>
    );
}
