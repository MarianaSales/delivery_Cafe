import styled, { css } from 'styled-components';

export interface QuantityItemsProps {
    size: 'medium' | 'small';
}

export const QuantityItemsContainer = styled.div<QuantityItemsProps>`
    flex: 1;
    background: ${({ theme }) => theme['grey_500']};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    border-radius: 6px;
    padding: 0.5rem;

    input {
        text-align: center;
        width: 100%;
        background: none;
        border: none;
        color: ${({ theme }) => theme['grey_900']};

        &:focus {
            outline: none;
        }
    }

    /* ${({ size }) =>
        size === 'medium' &&
        css`
            padding: 0.5rem;
        `}

    ${({ size }) =>
        size === 'small' &&
        css`
            padding: 0.3rem 0.5rem;
        `} */
`;

export const IconsWrapper = styled.button.attrs({
    type: 'button',
})`
    width: 0.875rem;
    height: 0.875rem;
    border: none;
    background: none;
    color: ${({ theme }) => theme['purple_500']};
    transition: 0.4s;

    &:disabled {
        opacity: 0.4;
    }

    &:not(:disabled):hover {
        color: ${({ theme }) => theme['purple_700']};
    }
`;
