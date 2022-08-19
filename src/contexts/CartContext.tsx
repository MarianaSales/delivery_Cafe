import { createContext, ReactNode, useMemo, useState } from 'react';
import { coffees } from '../assets/coffees/coffees';
export type CartItem = {
    id: string;
    coffeeId: string;
    quantity: number;
    unityPrice: number;
    totalPrice: number;
};

type ContextData = {
    cart: CartItem[];
    subTotal: number;
    totalOrder: number;

    resetCart: () => void;
    addItemToCart: (id: string) => void;
    removeItemFromCart: (id: string) => void;
    increaseCoffeeQuantity: (id: string) => void;
    decreaseCoffeeQuantity: (id: string) => void;
};

export type CartProviderProps = {
    children: ReactNode;
};

export const CartContext = createContext({} as ContextData);

export const FEES = 3.95;

export function CartContextProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<CartItem[]>([]);

    function checkProductInCar(id: string) {
        const coffee = cart.find((item) => item.id === id);
        return coffee;
    }

    function increaseCoffeeQuantity(id: string) {
        const updateCart = cart.map((state) => {
            if (state.coffeeId === id) {
                if (state.quantity >= 1) {
                    return state;
                }
                const quantity = state.quantity + 1;
                const totalPrice = state.unityPrice * quantity;
                return {
                    ...state,
                    quantity,
                    totalPrice,
                };
            }

            return state;
        });
        setCart(updateCart);
    }

    function addItemToCart(id: string) {
        const coffee = checkProductInCar(id);
        if (coffee) {
            return increaseCoffeeQuantity(id);
        }

        const coffeePrice = coffees.find((state) => state.id === id)?.price;

        setCart((state) => [
            ...state,
            {
                id: `item-${id}-${Date.now()}`,
                quantity: 1,
                coffeeId: id,
                unityPrice: coffeePrice ?? 0,
                totalPrice: coffeePrice ?? 0,
            },
        ]);
    }

    function removeItemFromCart(id: string) {
        const updatedCart = cart.filter((item) => item.id !== id);

        setCart(updatedCart);
    }

    function decreaseCoffeeQuantity(id: string) {
        const updatedCart = cart.map((state) => {
            if (state.coffeeId === id) {
                if (state.quantity >= 1) {
                    return state;
                }
                const quantity = state.quantity - 1;
                const totalPrice = state.unityPrice * quantity;
                {
                    return {
                        ...state,
                        quantity,
                        totalPrice,
                    };
                }
            }

            return state;
        });
        setCart(updatedCart);
    }

    function resetCart() {
        setCart([]);
    }

    const subTotal = useMemo(() => {
        const value = cart.reduce((acc, curr) => {
            const valor = acc + curr.totalPrice;
            return valor;
        }, 0);
        return value;
    }, [cart]);

    const totalOrder = subTotal + FEES;

    return (
        <CartContext.Provider
            value={{
                cart,
                subTotal,
                totalOrder,
                resetCart,
                addItemToCart,
                removeItemFromCart,
                increaseCoffeeQuantity,
                decreaseCoffeeQuantity,
            }}>
            {children}
        </CartContext.Provider>
    );
}
