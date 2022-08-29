import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    background: ${(props) => props.theme['grey_100']};
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
export const LogoContainer = styled.div`
    width: 100%;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const LocationButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-height: 2.3rem;
    height: 2.3rem;
    border-radius: 6px;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    font-size: 0.875rem;
`;
