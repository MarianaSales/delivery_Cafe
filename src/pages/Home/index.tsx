import { CoffeeList } from './components/CoffeeList';
import { HomeContainer } from './components/Home';
import { Container } from './styles';

export function Home() {
    return (
        <Container>
            <HomeContainer />
            <CoffeeList />
        </Container>
    );
}
