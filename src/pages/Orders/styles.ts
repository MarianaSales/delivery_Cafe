import styled from 'styled-components';

export const OrdersContainer = styled.form`
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`;

export const SectionsContainer = styled.div`
width:100%;
background: ${({ theme }) => theme['grey_200']};
border-radius: 6px;
padding: 2.5rem;
`