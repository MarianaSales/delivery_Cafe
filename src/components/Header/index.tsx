import { NavLink } from 'react-router-dom';
import { Counter, HeaderActions, HeaderContainer, Link } from './styles';
import logo from '../../assets/img/logo.svg';
import { MapPin, ShoppingCart, X as IconX } from 'phosphor-react';
import { useContextSelector } from 'use-context-selector';
import { GeoLocationContext } from '../../contexts/GeolocationContext';
import { CartContext } from '../../contexts/CartContext';

export function Header() {
    const address = useContextSelector(GeoLocationContext, (context) => {
        return context.address;
    });
    const cart = useContextSelector(CartContext, (context) => {
        return context.cart;
    });
    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={logo} alt="" />
            </NavLink>
            <HeaderActions>
                <MapPin size={24} weight="fill" />
                {Object.keys(address).length ? (
                    <span>
                        {`${address.city}`}, {`S{address.state}`}
                    </span>
                ) : (
                    <IconX
                        color="red"
                        weight="fill"
                        size={32}
                        style={{
                            position: 'absolute',
                            right: 4,
                        }}
                    />
                )}
                <Link to="/checkout">
                    {!!cart.length && <Counter>{cart.length}</Counter>}
                    <ShoppingCart />
                </Link>
            </HeaderActions>
        </HeaderContainer>
    );
}
