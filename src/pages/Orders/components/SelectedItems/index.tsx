import { useContext } from 'react';
import { Title } from '../../../../components/Typography';
import { CartContext } from '../../../../context/CartContext';
import { DetailsContainer, Label, SelectedItemsContainer } from './styles';
import { CartCard } from '../CartCard';
import { Confirmation } from './Confirmation';

export function SelectedItems() {
    const { cartItems } = useContext(CartContext);

    return (
        <SelectedItemsContainer>
            <Label>
                <Title size="s" color="grey_800">
                    Cafés selecionados
                </Title>
            </Label>
            <DetailsContainer>
                {cartItems.map((item) => (
                    <CartCard key={item.id} coffee={item} />
                ))}
                <Confirmation />
            </DetailsContainer>
        </SelectedItemsContainer>
    );
}
