import React, { createContext, useState } from "react";
import Dishes, { MenuDishes } from "./Data";

export const data = createContext(null);

function UseContext(props) {

    const [cart, setCart] = useState([]);
    const [fil, setFil] = useState([])
    function addToCart(items) {
        let exist = cart.find(getitem => getitem.id === items.id);
        if (exist) {
            let updated = cart.map((cartitems) => {
                return cartitems.id === items.id ? { ...cartitems, qty: cartitems.qty + 1 } : cartitems
            })
            setCart(updated)
        }
        else {
            setCart([...cart, { ...items, qty: 1 }])
        }
    }
    function increaseQty(id) {
        let updatedCart = cart.map((item) => {
            return item.id === id ? { ...item, qty: item.qty + 1 } : item

        })
        setCart(updatedCart)

    }

    function decreaseQty(id) {
        let updatedCart = cart.map((item) => {
            return item.id === id ? { ...item, qty: item.qty - 1 } : item

        }).filter((item) => item.qty > 0);
        setCart(updatedCart)
    }
    function removeItem(id) {
        let updatedCart = cart.filter(item => item.id !== id)
        setCart(updatedCart)
        console.log(updatedCart)
    }

    function FilteredItems(filteritems) {
        let menuitems = Dishes.filter(items => items.catagories === filteritems)
        setFil(menuitems)
        // console.log(menuitems)

    }

    const obj = {
        addToCart,
        cart,
        setCart,
        Dishes,
        MenuDishes,
        FilteredItems,
        fil,
        increaseQty,
        decreaseQty,
        removeItem,
    };

    return (
        <data.Provider value={obj}>
            {props.children}
        </data.Provider>
    );
}

export default UseContext;