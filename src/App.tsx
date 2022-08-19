import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { defaultTheme } from './styles/themes/default';

import { Home } from './pages/Home';

import { Header } from './components/Header';
import { CartContextProvider } from './contexts/CartContext';
import { Checkout } from './pages/Checkout';

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CartContextProvider>
                <BrowserRouter>
                    <Header />
                    <Home />
                    <Checkout />
                    <GlobalStyles />
                </BrowserRouter>
            </CartContextProvider>
        </ThemeProvider>
    );
}
