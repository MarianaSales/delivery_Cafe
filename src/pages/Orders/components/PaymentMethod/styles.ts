import styled, { css } from 'styled-components';

export const PaymentMethodContainer = styled.div`
    padding: 0 1rem;

    input {
        visibility: hidden;
        appearance: none;
    }

    input:checked + label div {
        ${({ theme }) => css`
            background: ${theme['purple_300']};
            border-color: ${theme['purple_500']};

            &:hover {
                background: ${theme['purple_300']};
            }
        `}
    }
`;

export const PaymentMethodContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1rem;
    background: ${({ theme }) => theme['grey_400']};
    color: ${({ theme }) => theme['grey_700']};
    border: 1px solid ${({ theme }) => theme['grey_400']};
    gap: 0.75rem;

    font-size: 0.75rem;
    text-transform: uppercase;
    height: 3rem;
    border-radius: 6px;
    transition: 0.4s;

    svg {
        color: ${({ theme }) => theme['purple_500']};
    }

    &:hover {
        background: ${({ theme }) => theme['grey_500']};
    }

    user-select: none;
`;
