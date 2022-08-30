import { ButtonContainer, HeaderContainer, LocationButton, LogoContainer } from './styles';
import logo from '../../assets/logo.svg';
import { MapPinLine } from 'phosphor-react';
import { ShoppingCartSimple } from 'phosphor-react';

export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <div>
                    <img src={logo} alt="Um copo de café" />
                </div>
            </LogoContainer>
            <ButtonContainer>
                <LocationButton variant="purple">
                    <MapPinLine size={20} weight="fill" />
                    Fortaleza, CE
                </LocationButton>
                <LocationButton variant="yellow">
                    <ShoppingCartSimple size={24} weight="fill" />3
                </LocationButton>
            </ButtonContainer>
        </HeaderContainer>
    );
}
