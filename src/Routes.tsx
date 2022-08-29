import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { HomePage } from './pages/Home';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
            </Route>
        </Routes>
    );
}
