import { List } from 'phosphor-react';
import { Item } from './components/Header/styles';
import { HomeContainer } from './styles';

export function Home() {
    return (
        <HomeContainer>
            <Item />
            <List />
        </HomeContainer>
    );
}
