import styled from 'styled-components';
import { Text, Title } from '../../../../components/Typography';

export const CoffeeCardsContainer = styled.div`
    width: 100;
    background: ${({ theme }) => theme['grey_200']};
    border-radius: 6px 36px 6px 36px;
    padding: 1.25rem;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > img {
        margin-top: -1.25rem;
        width: 120px;
        height: 120px;
    }
`;

export const Tags = styled.div`
    width: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 1rem;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;

    > span {
        background: ${({ theme }) => theme['yellow_300']};
        color: ${({ theme }) => theme['yellow_700']};
        font-size: ${({ theme }) => theme['tag']};
        text-transform: uppercase;
        padding: 0.25rem 0.5rem;
        border-radius: 999px;
        font-weight: 700;
    }
`;

export const CoffeeName = styled(Title).attrs({
    size: 's',
    color: 'grey_800',
})`
    font-weight: 700;
    margin-bottom: 0.5rem;
`;

export const CoffeeCardsDescription = styled(Text).attrs({
    size: 's',
    color: 'grey_600',
})`
    margin-bottom: 2rem;
`;

export const CoffeeCardsFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 29px;

    > div {
        display: flex;
        align-items: center;
        gap: 3px;

        p {
            line-height: 0.75rem;
        }
    }
`;

export const AddCoffeeCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 9px;

    height: 38px;
    left: 24px;
    right: 24px;
    bottom: 20px;

    button {
        width: 3rem;
        height: 35px;
        border: none;
        display: flex;

        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme['purple_700']};
        color: ${({ theme }) => theme['grey_200']};
        gap: 18px;
        border-radius: 6px;
        transition: 0.4s;

        flex-grow: 0;

        &:hover {
            background: ${({ theme }) => theme['purple_500']};
        }
    }
`;
