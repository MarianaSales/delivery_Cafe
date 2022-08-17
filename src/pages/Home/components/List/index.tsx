import { useCallback, useEffect, useState } from 'react';
import { api } from '../../../../lib/axios';
import { ListContainer, Loading } from './styles';
interface Order {
    id: string;
    image: string;
    label: string;
    title: string;
    description: string;
    price: number;
}

export function List() {
    const [orders, setOrders] = useState<Order[]>([]);

    const fetchList = useCallback(async (query?: string) => {
        const response = await api.get('/orders', {
            params: {
                q: query,
            },
        });
        setOrders(response.data);
    }, []);

    useEffect(() => {
        fetchList();
    }, []);
    return (
        <ListContainer>
            <label> Nossos cafés</label>
            {orders.length === 0 && <Loading>Carregando cafés disponíveis</Loading>}
            <div></div>
        </ListContainer>
    );
}
