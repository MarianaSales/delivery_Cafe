import styled from 'styled-components';
import { Section } from '../../styles';

export const SelectedItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;
`;

export const DetailsContainer = styled(Section)`
    display: flex;
    flex-direction: column;
    border-radius: 6px 44px 6px 44px;
`;

export const ConfirmationsContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
