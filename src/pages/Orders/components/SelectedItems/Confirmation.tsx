import { useContext } from 'react';
import { Button } from '../../../../components/Button';
import { Text } from '../../../../components/Typography';
import { CartContext } from '../../../../context/CartContext';
import { formatMoney } from '../../../../util/formatMoney';
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
                <Text>R$ {formattedItemsTotal}</Text>
            </div>
            <div>
                <Text size="s">Entrega</Text>
                <Text>R$ {formattedDeliveryPrice}</Text>
            </div>
            <div>
                <Text weight="700" color="grey_800" size="l">
                    Total
                </Text>
                <Text weight="700" color="grey_800" size="l">
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
    );
}
