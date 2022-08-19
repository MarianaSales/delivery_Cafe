import Americano from './expresso-americano.svg';
import Arabe from './arabe.svg';
import AuLatte from './cafe-com-leite.svg';
import Capuccino from './capuccino.svg';
import Cubano from './cubano.svg';
import Expresso from './expresso-tradicional.svg';
import ExpressoCream from './expresso-creamoso.svg';
import Havaiano from './havaiano.svg';
import HotChocolatte from './chocolate-quente.svg';
import IcedCoffee from './iced-coffee.png';
import Ireland from './irlandes.svg';
import Latte from './latte.svg';
import Macchiatto from './macchiato.svg';
import Mochaccino from './mochaccino.svg';

type Category = 'standard' | 'milky' | 'alcoholic' | 'special' | 'iced';

export const coffees = [
    {
        name: 'Americano',
        description: 'Diluted Expresso, less intense than the default Expresso',
        price: 10.9,
        image: Americano,
        id: 'american-38d8',
        categories: ['standard'],
    },
    {
        name: 'Arabe',
        description: 'Drink made with arabian coffee grainsand spices',
        price: 35.56,
        image: Arabe,
        id: 'arabian-dh3i',
        categories: ['special'],
    },
    {
        name: 'Au Latte',
        description: 'Mixed half of default Expresso and half of vaporized milk',
        price: 18.9,
        image: AuLatte,
        id: 'au-latte-ir8g',
        categories: ['standard', 'milky'],
    },
    {
        name: 'Capuccino',
        description: 'Drink with canela made with equal doses of coffee, milk and creamy foam',
        price: 8.9,
        image: Capuccino,
        id: 'capuccino-918j',
        categories: ['standard', 'milky'],
    },
    {
        name: 'Cubano',
        description: 'Iced drink made of Expresso coffee, rum, milk cream and mint',
        price: 7.56,
        image: Cubano,
        id: 'cuban-e77d',
        categories: ['special', 'alcoholic', 'iced'],
    },
    {
        name: 'Expresso Tradicional',
        description: 'The default coffee, made with hot water and ground grains',
        price: 9.99,
        image: Expresso,
        id: 'expresso-8e7h',
        categories: ['standard'],
    },
    {
        name: 'Expresso Cremoso',
        description: 'Default Expresso coffee with creamy foam',
        price: 12.67,
        image: ExpressoCream,
        id: 'expresso-cream-2f8c',
        categories: ['standard'],
    },
    {
        name: 'Havaiano',
        description: 'Sweetened drink made with coffee and coconut milk',
        price: 12.65,
        image: Havaiano,
        id: 'havaian-2r9l',
        categories: ['special'],
    },
    {
        name: 'Chocolate Quente',
        description: 'Drink made with chocolate dissolved in hot milk and coffee',
        price: 3.45,
        image: HotChocolatte,
        id: 'hpt-choco-me7j',
        categories: ['special', 'milky'],
    },
    {
        name: 'Iced Coffee',
        description: 'Drink prepared with Expresso coffee and ice cubes',
        price: 7.5,
        image: IcedCoffee,
        id: 'iced-coffee-o28d',
        categories: ['standard', 'iced'],
    },
    {
        name: 'Irelandes',
        description: 'Drink based on coffee, ireland whisky, sugar and chantilly',
        price: 14.6,
        image: Ireland,
        id: 'ireland-39rj',
        categories: ['special', 'alcoholic'],
    },
    {
        name: 'Latte',
        description: 'A dose of Expresso with twice the milk and creamy foam',
        price: 8.99,
        image: Latte,
        id: 'latte-o28s',
        categories: ['standard', 'milky'],
    },
    {
        name: 'Macchiatto',
        description: 'Expresso coffee mixed with hot water and foam',
        price: 16.75,
        image: Macchiatto,
        id: 'macchiatto-3r99',
        categories: ['standard', 'milky'],
    },
    {
        name: 'Mochaccino',
        description: 'Expresso coffee with chocolate syrup, low milk and foam',
        price: 11.89,
        image: Mochaccino,
        id: 'mochaccino-928r',
        categories: ['standard', 'milky'],
    },
];

export type Coffee = typeof coffees[0];
