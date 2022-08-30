import { Title } from './../../../../components/Typography';
import styled from 'styled-components';

export const LandingPageContainer = styled.section`
    width: 100%;
    height: 544px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding: 32px 160px;
`;
export const LandingPageContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`;

export const LandingPageTitle = styled(Title)`
    margin-bottom: 1rem;
`;

export const LandingPageItens = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    margin-top: 4.125rem;
`;
