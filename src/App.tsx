import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { defaultTheme } from './styles/themes/default';
import { Router } from './Routes';
import { CartContextProvider } from './context/CartContext';

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <GlobalStyles />
                <CartContextProvider>
                    <Router />
                </CartContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}
