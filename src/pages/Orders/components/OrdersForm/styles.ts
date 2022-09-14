import styled from 'styled-components';
import { SectionsContainer } from '../Sections/styles';

export const OrdersFromContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;

`;

export const FormSections = styled(SectionsContainer)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 6px;
    padding: 2.5rem;

    background: ${({ theme }) => theme['grey_200']};
`;

export const FormAddresses = styled.div`
    display: grid;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    column-gap: 0.75rem;
    grid-auto-flow: dense;
    row-gap: 1rem;
    width: 100%;

    .cep {
        grid-column: span 3;
        max-width: 12.5rem;
    }
    .street {
        grid-column: span 3;
        
    }
    .complement {
        grid-column: span 2;
      
    }
`;

export const PaymentOptionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;

    > p {
        grid-column: span 3;
        color: ${({ theme }) => theme.red_100};
    }
`;
