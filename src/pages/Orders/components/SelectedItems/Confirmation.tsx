import { useContext } from 'react';
import { Button } from '../../../../components/Button';
import { Text } from '../../../../components/Typography';
import { CartContext } from '../../../../context/CartContext';
import { formatMoney } from '../../../../util/formatMoney';
import { ConfirmationContainer } from './styles';

const DELIVERY_PRICE = 4;

export function Confirmation() {
    const { cartQuantity, itemsTotal } = useContext(CartContext);
    const totalPrice = DELIVERY_PRICE * itemsTotal;

    const formattedItemsTotal = formatMoney(itemsTotal);
    const formattedTotalPrice = formatMoney(totalPrice);
    const formattedDeliveredPrice = formatMoney(DELIVERY_PRICE);

    return (
        <ConfirmationContainer>
            <div>
                <Text size="s">Total dos itens</Text>
                <Text>R$ {formattedItemsTotal}</Text>
            </div>
            <div>
                <Text size="s">Entrega</Text>
                <Text>R$ {formattedDeliveredPrice}</Text>
            </div>
            <div>
                <Text weight="700" color="grey_800" size="l">
                    Total
                </Text>
                <Text weight="700" color="grey_800" size="l">
                    R$ {formattedTotalPrice}
                </Text>
            </div>
            <Button
                text="Confirmar pedido"
                disabled={cartQuantity <= 0}
                type="submit"
                color="yellow_700"
            />
        </ConfirmationContainer>
    );
}
