import { useContext } from 'react';
import { useContextSelector } from 'use-context-selector';
import { CartContext } from '../../../../contexts/CartContext';
import { CoffeeListContainer, Loading } from './styles';

export function CoffeeList() {
    const { subTotal, totalOrder } = useContext(CartContext);
    const cart = useContextSelector(CartContext, (context) => {
        return context.cart;
    });
    const hasItemsInCart = cart.length;

    return (
        <CoffeeListContainer>
            <h2>Nossos café</h2>
            {cart.length === 0 && <Loading>Carregando cafés disponíveis...</Loading>}

            <div>
                {cart.length ? (
                    cart.map((item) => <CoffeeList key={item.id} />)
                ) : (
                    <p>Não há itens no carrinho</p>
                )}
            </div>
            <div>
                <p>Subtotal</p>
                <p>R${subTotal.toFixed(2)}</p>
            </div>
            <div>
                <p>Total do pedido</p>
                <p>R${totalOrder.toFixed(2)}</p>
            </div>
            <button type="submit" disabled={!hasItemsInCart}>
                Finalizar pedido
            </button>
        </CoffeeListContainer>
    );
}
