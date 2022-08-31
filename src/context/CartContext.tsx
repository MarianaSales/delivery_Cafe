import produce from 'immer';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { Coffees } from '../components/interfaces';

interface CartContextProviderProps {
    children: ReactNode;
}

export interface CartItem extends Coffees {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    cartQuantity: number;
    itemsTotal: number;
    addingItemsToCart: (coffee: CartItem) => void;
    changedCartItems: (itemId: number, type: 'increase' | 'decrease') => void;
    removeItemsToCart: (itemId: number) => void;
    cancelPurchase: () => void;
}

const COFFEE_ITEMS_STORAGE_KEY = 'kikkisDeliveryService:cartItems';

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
        if (storedItems) {
            return JSON.parse(storedItems);
        }
        return [];
    });

    const cartQuantity = cartItems.length;

    const itemsTotal = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    function addingItemsToCart(coffee: CartItem) {
        const shoppingCart = cartItems.findIndex((item) => item.id === coffee.id);

        const newCart = produce(cartItems, (draft) => {
            if (shoppingCart < 0) {
                draft.push(coffee);
            } else {
                draft[shoppingCart].quantity += coffee.quantity;
            }
        });

        setCartItems(newCart);
    }

    function changedCartItems(itemId: number, type: 'increase' | 'decrease') {
        const newCart = produce(cartItems, (draft) => {
            const shoppingCart = cartItems.findIndex((item) => item.id === itemId);
            if (shoppingCart >= 0) {
                const items = draft[shoppingCart];
                draft[shoppingCart].quantity =
                    type === 'increase' ? items.quantity + 1 : items.quantity - 1;
            }
        });
        setCartItems(newCart);
    }

    function removeItemsToCart(itemId: number) {
        const newCart = produce(cartItems, (draft) => {
            const shoppingCart = cartItems.findIndex((item) => item.id === itemId);
            if (shoppingCart >= 0) {
                draft.splice(shoppingCart, 1);
            }
        });
        setCartItems(newCart);
    }

    function cancelPurchase() {
        setCartItems([]);
    }

    useEffect(() => {
        localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                itemsTotal,
                cartQuantity,
                addingItemsToCart,
                removeItemsToCart,
                changedCartItems,
                cancelPurchase,
            }}>
            {children}
        </CartContext.Provider>
    );
}
