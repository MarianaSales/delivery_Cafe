import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 0.75rem 2.8rem;
    background: ${({ theme }) => theme['yellow_500']};
    color: ${({ theme }) => theme['white']};
    font-size: ${({ theme }) => theme['button']};
    font-weight: 700;
    border: none;
    border-radius: 6px;
    margin-top: 0.7rem;
    text-transform: uppercase;
    transition: 0.4s;
    line-height: 1.3rem;

    &:disable {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${({ theme }) => theme['yellow_700']};
    }
`;
