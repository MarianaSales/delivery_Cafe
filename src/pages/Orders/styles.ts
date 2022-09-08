import styled from 'styled-components';

<<<<<<< Updated upstream
export const Container = styled.div`
    position: absolute;
    height: 1645px;
    left: 0px;
    right: 0px;
    top: 112px;
=======
export const OrdersContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;

    position: absolute;
    width: 640px;
    height: 591px;
    top: 182px;
    left: 160px;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: ${({ theme }) => theme['grey_200']};
    border-radius: 6px;
    padding: 40px;
    gap: 32px;

    /* width: 640px;
    height: 207px; */
>>>>>>> Stashed changes
`;
