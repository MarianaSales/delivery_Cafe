import { useTheme } from 'styled-components';
import { useContextSelector } from 'use-context-selector';
import { coffees } from '../../../../assets/coffees/coffees';
import { CartContext, CartItem } from '../../../../contexts/CartContext';
import {
    Badges,
    ButtonDecrease,
    ButtonIncrease,
    CoffeeItemActions,
    CoffeeItemContainer,
    Description,
    InputNumber,
    Title,
} from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { MinusCircle, PlusCircle } from 'phosphor-react';

const newPurchaseFormSchema = z.object({
    description: z.string(),
    totalPrice: z.string(),
});

interface CartItemProps {
    item: CartItem;
}

type NewPurchaseFormSchema = z.infer<typeof newPurchaseFormSchema>;

export function CoffeeItem({ item }: CartItemProps) {
    const theme = useTheme();
    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<NewPurchaseFormSchema>({
        resolver: zodResolver(newPurchaseFormSchema),
    });
    const increaseCoffeeQuantity = useContextSelector(CartContext, (context) => {
        return context.increaseCoffeeQuantity;
    });
    const decreaseCoffeeQuantity = useContextSelector(CartContext, (context) => {
        return context.decreaseCoffeeQuantity;
    });
    const removeItemFromCartItem = useContextSelector(CartContext, (context) => {
        return context.removeItemFromCart;
    });
    async function handleDecreaseCoffeeQuantity(id: string) {
        await decreaseCoffeeQuantity(id);
    }

    async function handleIncreaseCoffeeQuantity(id: string) {
        await increaseCoffeeQuantity(id);
    }

    const coffee = coffees.find((coffeeItem) => coffeeItem.id === item.coffeeId);

    return (
        <CoffeeItemContainer>
            <img src={coffee?.image} alt={coffee?.name} />

            <Badges>
                <span>{coffee?.name}</span>
            </Badges>
            <Title>{coffee?.name}</Title>
            <Description>{coffee?.description}</Description>

            <CoffeeItemActions>
                <span>
                    $&nbsp;
                    <strong>{item.unityPrice}</strong>
                </span>

                <InputNumber>
                    <ButtonDecrease
                        type="button"
                        onClick={() => handleDecreaseCoffeeQuantity(item.coffeeId)}>
                        <MinusCircle />
                    </ButtonDecrease>
                    <input
                        type="number"
                        min="1"
                        max="100"
                        step="1"
                        value={item.quantity}
                        required
                        {...register('totalPrice', { valueAsNumber: true })}
                    />

                    <ButtonIncrease
                        type="button"
                        onClick={() => handleIncreaseCoffeeQuantity(item.coffeeId)}>
                        <PlusCircle />
                    </ButtonIncrease>
                </InputNumber>
            </CoffeeItemActions>
        </CoffeeItemContainer>
    );
}
