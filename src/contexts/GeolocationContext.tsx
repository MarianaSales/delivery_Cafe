import { createContext, useState } from 'react';
import api from '../lib/axios';
import { CartProviderProps } from './CartContext';

type Coordinates = {
    latitude: number;
    longitude: number;
};

export type Address = {
    stateCode: string;
    city: string;
    postalCode: string;
    street: string;
    houseNumber: string;
    district: string;
};

type GeoResponseData = {
    address: Address;
};

type GeoResponse = {
    data: {
        items: GeoResponseData[];
    };
};

type ContextData = {
    address: Address;
    getGeolocation: (coords: Coordinates) => Promise<void>;
};

export const GeoLocationContext = createContext({} as ContextData);

const storeKey = '@delivery-cafe:location-data^1.0.0';

export function GeolocationContextProvider({ children }: CartProviderProps) {
    const [address, setAddres] = useState<Address>(() => {
        const stored = localStorage.getItem(storeKey);

        if (!stored) {
            return {} as Address;
        }
        return JSON.parse(stored) as Address;
    });

    async function getGeolocation(coords: Coordinates) {
        if (Object.keys(address).length) {
            return;
        }
        const url = `/revgeocode?at=${coords.latitude},${coords.longitude}&apiKey=${
            import.meta.env.REACT_APP_API_URL
        }`;
        const { data }: GeoResponse | any = await api.get<GeoResponse>(url).catch((err) => {
            alert(err);
        });
        localStorage.setItem(storeKey, JSON.stringify(data.items[0].address));
        setAddres(data.items[0].address);
    }
    return (
        <GeoLocationContext.Provider value={{ address, getGeolocation }}>
            {children}
        </GeoLocationContext.Provider>
    );
}
