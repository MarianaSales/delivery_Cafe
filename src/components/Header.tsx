import { NavLink } from 'react-router-dom';
import { Counter, HeaderActions, HeaderContainer, Link } from './styles';
import logo from '../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={logo} alt="Copo de café" />
            </NavLink>
            <HeaderActions>
                <div>
                    <MapPin weight="fill" />
                    <span>Água Fria, Edson Queiroz</span>
                </div>

                <Link to="/checkout">
                    <Counter>3</Counter>
                    <ShoppingCart weight="fill" />
                </Link>
            </HeaderActions>
        </HeaderContainer>
    );
}
