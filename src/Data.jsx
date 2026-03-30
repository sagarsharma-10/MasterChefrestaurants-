import React from 'react'
import AlfredoPasta from './img/Alfredopasta.jpg'
import ArrabbiatePaste from './img/ArrabbiataPasta.jpg'
import Brownie from './img/Brownie.jpg'
import CaesarSalad from './img/CaesarSalad.jpg'
import ChocolateCake from './img/ChocolateCake.jpg'
import ClassicCheeseburger from './img/ClassicCheeseburger.jpg'
import CocaCola from './img/CocaCola.jpg'
import ColdCoffee from './img/coldCoffee.jpg'
import DoublePattyBurger from './img/DoublePattyBurger.jpg'
import Fanta from './img/Fanta.jpg'
import FarmhousePizza from './img/FarmhousePizza.jpg'
import GarlicNoodles from './img/GarlicNoodles.jpg'
import GreekSalad from './img/GreekSalad.jpg'
import HakkaNoodles from './img/HakkaNoodles.jpg'
import Margherita from './img/MargheritaPizza1.jpg'
import PepperoniPizza from './img/PepperoniPizza.jpg'
import Pepsi from './img/Pepsi.jpg'
import PestoPasta from './img/PestoPasta.jpg'
import russianSalad from './img/russianSalad.jpg'
import SechezwanNoodles from './img/SchezwanNoodles.jpg'
import Sprite from './img/Sprite.jpg'
import VanillaIceCream from './img/VanillaIceCream.jpg'
import VeggieBurger from './img/VeggieBurger.jpg'
import VeggieSupremePizza from './img/VeggieSupremePizza.jpg'
import VegStirFryNoodles from './img/VegStirFryNoodles.jpg';
// import Header from './Components/Header'
import { CiStar } from "react-icons/ci";
import { useState } from 'react'



const Dishes = [
    {
        id: 1,
        name: 'Alfredo Pasta',
        catagories: "Pasta",
        description: "Creamy white sauce pasta tossed with herbs and rich flavors.",
        img: AlfredoPasta,
        price: "249"
    },
    {
        id: 2,
        name: 'Classic Cheeseburger',
        catagories: "burger",
        description: "Juicy grilled patty with melted cheese, fresh veggies, and sauces.",
        img: ClassicCheeseburger,
        price: "149"
    },
    {
        id: 3,
        name: 'Farmhouse Pizza',
        catagories: "pizza",
        description: "Pizza topped with fresh veggies, cheese, and flavorful herbs.",
        img: FarmhousePizza,
        price: "299"
    },
    {
        id: 4,
        name: 'Brownie',
        catagories: "Desert",
        description: "Rich and fudgy chocolate brownie with a soft, gooey center.",
        img: Brownie,
        price: "149"
    },
    {
        id: 5,
        name: 'Coca-Cola',
        catagories: "Colddrink",
        description: "Chilled fizzy soft drink with refreshing cola flavor.",
        img: CocaCola,
        price: "60"
    },

    {
        id: 6,
        name: 'Arrabbiata Pasta',
        catagories: "Pasta",
        description: "Spicy red sauce pasta with garlic, tomatoes, and chili flakes.",
        img: ArrabbiatePaste,
        price: "229"
    },
    {
        id: 7,
        name: 'Veggie Burger',
        catagories: "burger",
        description: "Crispy veggie patty burger with fresh toppings and sauces.",
        img: VeggieBurger,
        price: "129"
    },
    {
        id: 8,
        name: 'Margherita Pizza',
        catagories: "pizza",
        description: "Simple pizza with fresh tomato sauce, mozzarella, and basil.",
        img: Margherita,
        price: "249"
    },
    {
        id: 9,
        name: 'Chocolate Cake',
        catagories: "Desert",
        description: "Moist and fluffy chocolate cake layered with rich chocolate cream.",
        img: ChocolateCake,
        price: "179"
    },
    {
        id: 10,
        name: 'ColdCoffee',
        catagories: "Colddrink",
        description: "Refreshing cold coffee blended with milk and ice.",
        img: ColdCoffee,
        price: "129"
    },

    {
        id: 11,
        name: 'Pesto Pasta',
        catagories: "Pasta",
        description: "Pasta tossed in fresh basil pesto sauce with rich aroma.",
        img: PestoPasta,
        price: "249"
    },
    {
        id: 12,
        name: 'Double Patty Burger',
        catagories: "burger",
        description: "Loaded burger with double juicy patties and extra cheese.",
        img: DoublePattyBurger,
        price: "199"
    },
    {
        id: 13,
        name: 'Pepperoni Pizza',
        catagories: "pizza",
        description: "Cheesy pizza topped with spicy pepperoni slices.",
        img: PepperoniPizza,
        price: "349"
    },
    {
        id: 14,
        name: 'Vanilla Ice Cream',
        catagories: "Desert",
        description: "Smooth and creamy vanilla ice cream with classic flavor.",
        img: VanillaIceCream,
        price: "99"
    },
    {
        id: 15,
        name: 'Pepsi',
        catagories: "Colddrink",
        description: "Refreshing carbonated drink with a bold cola taste.",
        img: Pepsi,
        price: "60"
    },

    {
        id: 16,
        name: 'Caesar Salad',
        catagories: "Salad",
        description: "Crisp lettuce tossed with creamy dressing, croutons, and cheese.",
        img: CaesarSalad,
        price: "199"
    },
    {
        id: 17,
        name: 'Garlic Noodles',
        catagories: "Noodles",
        description: "Stir-fried noodles tossed with garlic and savory sauces.",
        img: GarlicNoodles,
        price: "179"
    },
    {
        id: 18,
        name: 'Greek Salad',
        catagories: "Salad",
        description: "Fresh salad with olives, cucumber, feta cheese, and herbs.",
        img: GreekSalad,
        price: "189"
    },
    {
        id: 19,
        name: 'Hakka Noodles',
        catagories: "Noodles",
        description: "Classic Indo-Chinese noodles with veggies and soy flavors.",
        img: HakkaNoodles,
        price: "159"
    },
    {
        id: 20,
        name: 'Sprite',
        catagories: "Colddrink",
        description: "Cool lemon-lime drink with a crisp and refreshing taste.",
        img: Sprite,
        price: "60"
    },

    {
        id: 21,
        name: 'Russian Salad',
        catagories: "Salad",
        description: "Creamy salad with mixed vegetables and smooth dressing.",
        img: russianSalad,
        price: "169"
    },
    {
        id: 22,
        name: 'Schezwan Noodles',
        catagories: "Noodles",
        description: "Spicy noodles tossed in bold Schezwan sauce.",
        img: SechezwanNoodles,
        price: "189"
    },
    {
        id: 23,
        name: 'Veggie Supreme Pizza',
        catagories: "pizza",
        description: "Loaded veggie pizza with cheese, sauces, and fresh toppings.",
        img: VeggieSupremePizza,
        price: "329"
    },
    {
        id: 24,
        name: 'Veg Stir-Fry Noodles',
        catagories: "Noodles",
        description: "Healthy stir-fried noodles with fresh vegetables.",
        img: VegStirFryNoodles,
        price: "169"
    }
];
export const MenuDishes = [
    {
        id: 24,
        name: 'Veggie Supreme Pizza',
        catagories: "pizza",
        description: "Loaded veggie pizza with cheese, sauces, and fresh toppings.",
        img: VeggieSupremePizza,
        price: "10"
    },
    {
        id: 23,
        name: 'Veggie Burger',
        catagories: "burger",
        description: "Crispy veggie patty burger with fresh toppings and sauces.",
        img: VeggieBurger,
        price: "10"
    }, {
        id: 22,
        name: 'Veg Stir-Fry Noodles',
        catagories: "Noodles",
        description: "Healthy stir-fried noodles with fresh vegetables.",
        img: VegStirFryNoodles,
        price: "10"
    }, {
        id: 21,
        name: 'Vanilla Ice Cream',
        catagories: "Desert",
        description: "Smooth and creamy vanilla ice cream with classic flavor.",
        img: VanillaIceCream,
        price: "10"
    }, {
        id: 18,
        name: 'Russian Salad',
        catagories: "Salad",
        description: "Creamy salad with mixed vegetables and smooth dressing.",
        img: russianSalad,
        price: "10"
    }, {
        id: 17,
        name: 'Pesto Pasta',
        catagories: "Pasta",
        description: "Pasta tossed in fresh basil pesto sauce with rich aroma.",
        img: PestoPasta,
        price: "10"
    }, {
        id: 16,
        name: 'Pepsi',
        catagories: "Colddrink",
        description: "Refreshing carbonated drink with a bold cola taste.",
        img: Pepsi,
        price: "10"
    }
]

export default Dishes