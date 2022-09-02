import styled from 'styled-components';

export const CartCardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme['grey_400']};

    > div {
        display: flex;
        align-items: center;
        gap: 1.25rem;

        img {
            width: 4rem;
            height: 4rem;
        }
    }

    > p {
        align-self: flex-start;
        font-weight: 700;
    }
`;

export const PurchasesContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    gap: 0.5rem;

    > div {
        max-width: 4.5rem;
        height: 100%;
    }
`;

export const RemoveButtons = styled.button`
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme['grey_400']};
    color: ${({ theme }) => theme['grey_700']};
    height: 100%;
    border: none;
    padding: 0 0.5rem;
    border-radius: 6px;
    transition: 0.4s;

    svg {
        color: ${({ theme }) => theme['purple_500']};
    }

    &:hover {
        background: ${({ theme }) => theme['grey_500']};
    }
`;
