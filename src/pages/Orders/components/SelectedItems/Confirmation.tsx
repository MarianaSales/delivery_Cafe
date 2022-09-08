import { useContext } from 'react';
import { Button } from '../../../../components/Button';
import { Text } from '../../../../components/Typography';
import { CartContext } from '../../../../context/CartContext';
import { formatMoney } from '../../../../util/formatMoney';
<<<<<<< Updated upstream
import { ConfirmationsContainer } from './styles';

const DELIVERY_PRICE = 4.5;

export function Confirmation() {
    const { itemsTotal, cartQuantity } = useContext(CartContext);
    const cartTotal = DELIVERY_PRICE * itemsTotal;

    const formattedItemsTotal = formatMoney(itemsTotal);
    const formattedCartTotal = formatMoney(cartTotal);
    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

    return (
        <ConfirmationsContainer>
            <div>
                <Text size="s">Total de itens</Text>
=======
import { SelectedItemsContainer } from './styles';

const DELIVERY_PRICE = 4;

export function Confirmation() {
    const { cartQuantity, itemsTotal } = useContext(CartContext);
    const totalPrice = DELIVERY_PRICE * itemsTotal;

    const formattedItemsTotal = formatMoney(itemsTotal);
    const formattedTotalPrice = formatMoney(totalPrice);
    const formattedDeliveredPrice = formatMoney(DELIVERY_PRICE);

    return (
        <SelectedItemsContainer>
            <div>
                <Text size="s">Total dos itens</Text>
>>>>>>> Stashed changes
                <Text>R$ {formattedItemsTotal}</Text>
            </div>
            <div>
                <Text size="s">Entrega</Text>
<<<<<<< Updated upstream
                <Text>R$ {formattedDeliveryPrice}</Text>
=======
                <Text>R$ {formattedDeliveredPrice}</Text>
>>>>>>> Stashed changes
            </div>
            <div>
                <Text weight="700" color="grey_800" size="l">
                    Total
                </Text>
                <Text weight="700" color="grey_800" size="l">
<<<<<<< Updated upstream
                    R$ {formattedCartTotal}
                </Text>
            </div>

            <Button
                text="Confirmar Pedido"
                disabled={cartQuantity <= 0}
                type="submit"
                color="yellow_700"
            />
        </ConfirmationsContainer>
=======
                    R$ {formattedTotalPrice}
                </Text>
            </div>
            <Button text="Confirmar pedido" disabled={cartQuantity <= 0} type="submit" />
        </SelectedItemsContainer>
>>>>>>> Stashed changes
    );
}
