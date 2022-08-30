import { CoffeeDisplay } from './components/CoffeeDisplay';
import { LandingPage } from './components/LandingPage';
import { HomeContainer } from './styles';

export function HomePage() {
    return (
        <HomeContainer>
            <LandingPage />
            {/* <CoffeeDisplay /> */}
        </HomeContainer>
    );
}
