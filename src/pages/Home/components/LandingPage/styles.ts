import { Title } from './../../../../components/Typography';
import styled from 'styled-components';

export const LandingPageContainer = styled.section`
    width: 100%;
    height: 34rem;

`;
export const LandingPageContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
`;

export const LandingPageTitle = styled(Title)`
    margin-bottom: 1rem;
`;

export const LandingPageItens = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    margin-top: 4.125rem;
`;
