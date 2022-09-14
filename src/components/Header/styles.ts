import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
   
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

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
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
    cursor: inherit;
    
    span {
      position: absolute;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      top: calc(-1.25rem / 2);
      right: calc(-1.25rem / 2);
      color: ${({ theme }) => theme['white']};
      
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 700;
    }

    ${({ variant, theme }) =>
        css`
             {
                background: ${theme[`${variant}_300`]};
                color: ${theme[`${variant}_700`]};

                span{
                    background: ${theme[`${variant}_700`]};
                }
            }
        `};

    ${({ variant, theme }) =>
    variant === 'purple' &&
        css`
            svg {
                color: ${theme[`${variant}_500`]};
            }
        `};
`;
