import styled from 'styled-components';

export const OrdersContainer = styled.form`
    width: 100%;
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`;

export const Section = styled.div`
    width: 100%;
    background: ${({ theme }) => theme['grey_200']};
    border-radius: 6px;
    padding: 2.5rem;
`;
