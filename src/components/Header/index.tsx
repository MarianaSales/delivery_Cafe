import { ButtonContainer, HeaderContainer, LocationButton } from './styles';
import logo from '../../assets/logo.svg';
import { MapPinLine } from 'phosphor-react';
import { ShoppingCartSimple } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

export function Header() {
    const { cartQuantity } = useContext(CartContext);

    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={logo} alt="Um copo de café" />
                </NavLink>
                <ButtonContainer>
                <LocationButton variant="purple">
                    <MapPinLine size={20} weight="fill" />
                    Fortaleza, CE
                </LocationButton>
                <NavLink to="/orders">
                    <LocationButton variant="yellow">
                        <ShoppingCartSimple size={24} weight="fill" />
                        {cartQuantity > 1 && <span>{cartQuantity}</span>}
                    </LocationButton>
                </NavLink>
            </ButtonContainer>
            </div>        
        </HeaderContainer>
    );
}
