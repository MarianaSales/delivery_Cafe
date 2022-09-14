import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    position: relative;

    > p {
        color: ${({ theme }) => theme['red_100']};
    }
`;

interface InputContenrProps {
    hasErrors: boolean;
}

export const InputContent = styled.div<InputContenrProps>`
    height: 2.625rem;
    background: ${({ theme }) => theme['grey_300']};
    border: 1px solid ${({ theme }) => theme['grey_400']};
    transition: 0.4s;
    border-radius: 4px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    overflow: hidden;

    &:focus-within {
        border-color: ${({ theme }) => theme['yellow_700']};
    }  

    ${({ theme, hasErrors }) => hasErrors && css`
    border-color: ${({theme})=> theme['red_100']}`}
`;

export const InputStyle = styled.input`
    flex: 1;
    background: none;
    border: none;
    color: ${({ theme }) => theme['grey_700']};
    font-size: 0.75rem;
    padding: 0 0.75rem;
    height: 100%;

    &::placeholder {
        color: ${({ theme }) => theme['grey_600']};
    }
`;

export const TextStyle = styled.p`
    font-size: 0.75rem;
    margin-right: 0.75rem;
    font-style: italic;
    color: ${({ theme }) => theme['grey_600']};
`;
