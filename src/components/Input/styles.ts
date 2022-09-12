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

interface InputContainerProps {
    hasErrors: boolean;
}

export const InputContent = styled.input`
    height: 2.625rem;
    background: ${({ theme }) => theme['grey_300']};
    border: 1px solid ${({ theme }) => theme['grey_400']};
    transition: 0.4s;

    &:focus {
        border-color: ${({ theme }) => theme['yellow_700']};
    }

    color: ${({ theme }) => theme['grey_700']};
    font-size: 0.75rem;
    padding: 0 0.75rem;

    &::placeholder {
        color: ${({ theme }) => theme['grey_600']};
    }

   
`;

export const InputStyle = styled.input`
    flex: 1;
    border: none;
    height: 100%;
    padding: 0 0.75rem;
    color: ${({ theme }) => theme['grey_700']};

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
