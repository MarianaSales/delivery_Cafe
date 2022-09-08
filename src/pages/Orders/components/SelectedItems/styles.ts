import styled from 'styled-components';

export const SelectedItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
<<<<<<< Updated upstream
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

    /* position: absolute; */
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

    /* position: absolute; */
=======
    align-items: center;
    padding: 40px;
    gap: 24px;

    position: absolute;
>>>>>>> Stashed changes
    width: 448px;
    height: 498px;
    left: 832px;
    top: 182px;
<<<<<<< Updated upstream

    background: ${({ theme }) => theme['grey_100']};
    color: ${({ theme }) => theme['grey_700']};
=======
>>>>>>> Stashed changes
    border-radius: 6px 44px;
`;

export const DetailsContainer = styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 8px 4px;
    gap: 59px;

    width: 368px;
    height: 80px;
    background: ${({ theme }) => theme['grey_200']};
`;
