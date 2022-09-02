import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { HomePage } from './pages/Home';
import { OrderConfirmed } from './pages/OrderConfirmed';
import { Orders } from './pages/Orders';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/orderConfirmed" element={<OrderConfirmed />} />
            </Route>
        </Routes>
    );
}
