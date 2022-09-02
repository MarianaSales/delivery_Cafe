import { useContext } from 'react';
import { Title } from '../../../../components/Typography';
import { CartContext } from '../../../../context/CartContext';
import { DetailsContainer, SelectedItemsContainer } from './styles';
import { CartCard } from '../CartCard';

export function SelectedItems() {
    const { cartItems } = useContext(CartContext);

    return (
        <SelectedItemsContainer>
            <Title size="xs" color="grey_800">
                Cafés selecionados
            </Title>
            <DetailsContainer>
                {cartItems.map((item) => (
                    <CartCard key={item.id} coffee={item} />
                ))}
            </DetailsContainer>
        </SelectedItemsContainer>
    );
}
