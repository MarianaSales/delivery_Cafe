import styled from 'styled-components';

export const SelectedItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 24px;

    position: absolute;
    width: 448px;
    height: 498px;
    left: 832px;
    top: 182px;
`;

export const Label = styled.div`
    display: flex;
    align-items: center;

    width: 448px;
    height: 23px;
    left: 160px;
    top: 144px;
`;

export const DetailsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    gap: 24px;

    width: 448px;
    height: 498px;
    left: 832px;
    top: 182px;

    background: ${({ theme }) => theme['grey_100']};
    color: ${({ theme }) => theme['grey_700']};
    border-radius: 6px 44px;
`;

export const ConfirmationContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
