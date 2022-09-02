import { TrashSimple } from 'phosphor-react';
import { useContext } from 'react';
import { QuantityItems } from '../../../../components/QuantityItems';
import { Text } from '../../../../components/Typography';
import { CartContext, CartItem } from '../../../../context/CartContext';
import { formatMoney } from '../../../../util/formatMoney';
import { CartCardContainer, PurchasesContainer, RemoveButtons } from './styles';

interface CartCardProps {
    coffee: CartItem;
}

export function CartCard({ coffee }: CartCardProps) {
    const { changedCartItems, removeItemsToCart } = useContext(CartContext);

    function handleIncrease() {
        changedCartItems(coffee.id, 'increase');
    }

    function handleDecrease() {
        changedCartItems(coffee.id, 'decrease');
    }

    function handleRemove() {
        removeItemsToCart(coffee.id);
    }
    const coffeeTotal = coffee.price * coffee.quantity;
    const formatedPrice = formatMoney(coffeeTotal);

    return (
        <CartCardContainer>
            <div>
                <img src={`/coffees/${coffee.photo}`} alt="" />
                <div>
                    <Text color="grey_800">{coffee.name}</Text>

                    <PurchasesContainer>
                        <QuantityItems
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            quantity={coffee.quantity}
                            size="small"
                        />
                        <RemoveButtons type="button" onClick={handleRemove}>
                            <TrashSimple size={16} />
                            Remover
                        </RemoveButtons>
                    </PurchasesContainer>
                </div>
            </div>
            <p>RS{formatedPrice}</p>
        </CartCardContainer>
    );
}
