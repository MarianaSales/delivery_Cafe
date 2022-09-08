import styled from 'styled-components';

export const OrdersFromContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 40px;
    gap: 8px;

    position: absolute;
    width: 640px;
    height: 591px;
`;
export const Label = styled.div`
    display: flex;
    align-items: center;

    /* position: absolute; */
    width: 100%;
    height: 23px;
    left: 832px;
    top: 144px;
`;

export const FormSections = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: center;
    padding: 0 40px;
    gap: 32px;

    background: ${({ theme }) => theme['grey_100']};
    color: ${({ theme }) => theme['grey_700']};
    border-radius: 6px;

    position: relative;
    width: 640px;
    height: 591px;
    left: 160px;
    top: 102px;
`;

export const FormAddresses = styled.div`
    /* display: grid;
    flex-direction: column;
    align-items: flex-start;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    column-gap: 0.75rem;
    row-gap: 1rem;
    padding: 30px;
    grid-auto-flow: dense; */

    display: grid;
    flex-direction: column;
    align-items: center;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    padding: 20 20px;
    gap: 16px;

    background: ${({ theme }) => theme['grey_100']};
    color: ${({ theme }) => theme['grey_700']};
    border-radius: 6px;

    width: 560px;
    height: 216px;

    /* width: 100%;
    height: 372px; */

    .cep {
        grid-column: span 3;
        max-width: 12.5rem;
        border-radius: 6px;
    }
    .street {
        grid-column: span 3;
        border-radius: 6px;
    }
    .complement {
        grid-column: span 2;
        border-radius: 6px;
    }
`;

export const PaymentOptionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;

    > p {
        grid-column: span 3;
        color: ${({ theme }) => theme['red_100']};
    }
`;
