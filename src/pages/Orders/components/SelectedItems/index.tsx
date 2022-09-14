import { useContext } from 'react';
import { Title } from '../../../../components/Typography';
import { CartContext } from '../../../../context/CartContext';
import { DetailsContainer, SelectedItemsContainer } from './styles';
import { CartCard } from '../CartCard';
import { Confirmation } from './Confirmation';

export function SelectedItems() {
    const { cartItems } = useContext(CartContext);

    return (
        <SelectedItemsContainer>
            <Title size="s" color="grey_800">
                Cafés selecionados
            </Title>
            <DetailsContainer>
                {cartItems.map((cartItem) => (
                    <CartCard key={cartItem.id} coffee={cartItem} />
                ))}
                <Confirmation />
            </DetailsContainer>
        </SelectedItemsContainer>
    );
}
