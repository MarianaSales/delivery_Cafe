import { Title } from './../../../../components/Typography';
import styled from 'styled-components';
import back from '../../../../assets/img/back.svg';
import { rgba } from 'polished';

export const LandingPageContainer = styled.section`
    width: 100%;
    height: 34rem;

    background: ${({ theme }) => `url(${back}) no-repeat center,
    linear-gradient(
        0deg,
        ${theme['white']} 0%,
        ${rgba(theme['grey_100'], 0.2)} 50%,
        ${theme["grey_100"]} 100%
    )`};
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

`;
export const LandingPageContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
    width: 100%;
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
