import { MinusCircle, PlusCircle } from 'phosphor-react';
import { IconsWrapper, QuantityItemsContainer } from './styles';

interface QuantityItemsProps {
    size: 'medium' | 'small';
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}
export function QuantityItems({
    size = 'medium',
    quantity,
    onIncrease,
    onDecrease,
}: QuantityItemsProps) {
    return (
        <QuantityItemsContainer size={size}>
            <IconsWrapper onClick={onDecrease} disabled={quantity <= 1}>
                <MinusCircle size={14} weight="fill" />
            </IconsWrapper>
            <input type="number" readOnly value={quantity} />
            <IconsWrapper onClick={onIncrease}>
                <PlusCircle size={14} weight="fill" />
            </IconsWrapper>
        </QuantityItemsContainer>
    );
}
