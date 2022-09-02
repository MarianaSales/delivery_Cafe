import styled from 'styled-components';

export const OrderConfirmedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 5rem;

    h1 {
        color: ${({ theme }) => theme['yellow_700']};
    }

    > section {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const OrderConfirmedDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    padding: 2.5rem;
    background: ${({ theme }) => theme['grey_100']};
    min-width: 32rem;

    &::before {
        content: '';
        position: absolute;
        inset: -1px;
        z-index: -1;
        background: linear-gradient(102.82deg, #dbac2c 2.61%, #8047f8 98.76%);
    }
`;
