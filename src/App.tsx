import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { defaultTheme } from './styles/themes/default';
import { CartContextProvider } from './context/CartContext';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { Header } from './components/Header';

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
