import {
    AddCoffeeCardContainer,
    CoffeeCardsContainer,
    CoffeeCardsDescription,
    CoffeeCardsFooter,
    CoffeeName,
    Tags,
} from './styles';
import { Coffees } from '../../../../components/interfaces';
import { useContext, useState } from 'react';
import { Text, Title } from '../../../../components/Typography';
import { formatMoney } from '../../../../util/formatMoney';
import { CartContext } from '../../../../context/CartContext';
import { QuantityItems } from '../../../../components/QuantityItems';
import { ShoppingCart } from 'phosphor-react';

interface CoffeeProps {
    coffee: Coffees;
}
export function CoffeeCards({ coffee }: CoffeeProps) {
    const [quantity, setQuantity] = useState(0);
    const { addingItemsToCart } = useContext(CartContext);

    function handleIncrease() {
        setQuantity((state) => state + 1);
    }

    function handleDecrease() {
        setQuantity((state) => state - 1);
    }

    function handleAddToCart() {
        const addToCart = {
            ...coffee,
            quantity,
        };
        addingItemsToCart(addToCart);
    }

    const formattedPrice = formatMoney(coffee.price);

    return (
        <CoffeeCardsContainer>
            <img src={`/coffees/${coffee.photo}`} />
            <Tags>
                {coffee.tags.map((tag) => (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
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

                <AddCoffeeCardContainer>
                    <QuantityItems
                        size="medium"
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={quantity}
                    />
                    {/* <NavLink to="/orders"> */}
                    <button onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                    {/* </NavLink> */}
                </AddCoffeeCardContainer>
            </CoffeeCardsFooter>
        </CoffeeCardsContainer>
    );
}
