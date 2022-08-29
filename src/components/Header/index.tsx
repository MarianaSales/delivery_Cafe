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
                <LocationButton>
                    <MapPinLine size={24} width="fill" color="purple" />
                    Fortaleza,Ceará
                </LocationButton>
                <LocationButton>
                    <ShoppingCartSimple size={24} />
                </LocationButton>
            </ButtonContainer>
        </HeaderContainer>
    );
}
