import styled from 'styled-components';
import { SectionsContainer } from '../../styles';


export const SelectedItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40rem;
    gap: 0.75rem; 
`;


export const DetailsContainer = styled(SectionsContainer)`
    display: flex;
    flex-direction: column;
    border-radius: 6px 44px 6px 44px;
    background: ${({ theme }) => theme['grey_200']};
    color: ${({ theme }) => theme['grey_700']};
`;

export const ConfirmationContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    
    >div {
       display: flex;
       justify-content: space-between;
       align-items: center;
    }
`;
