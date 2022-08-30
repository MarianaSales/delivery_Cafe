import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    background: ${(props) => props.theme['grey_100']};
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
export const LogoContainer = styled.div`
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-right: auto;
    margin-left: auto;
`;
interface LocationButtonProps {
    variant: 'purple' | 'yellow';
}

export const LocationButton = styled.button<LocationButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 6px;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    font-size: 0.875rem;
    color: ${({ variant, theme }) => theme[`${variant}_500`]};

    ${({ variant, theme }) =>
        css`
             {
                background: ${theme[`${variant}_300`]};
            }
        `};

    ${({ variant, theme }) =>
        css`
            svg {
                color: ${theme[`${variant}_500`]};
            }
        `};
`;
