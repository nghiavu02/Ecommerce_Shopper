import React, {createContext, useState} from "react";
import all_product from '../Components/Assets/all_product'
export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {};
    for(let i = 0; i < all_product.length+1; i++){
        cart[i] = 0;
    }
    return cart
}
const ShopContextProvider = (props) =>{
    
    const [cartItem, setCartItem] = useState(getDefaultCart())
    const addCart = (itemId) =>{
        setCartItem(prev => ({...prev, [itemId]:prev[itemId]+1}))
    }
    const removeCart = (itemId) =>{
        setCartItem(prev => ({...prev, [itemId]:prev[itemId]-1}))
    }
    const getTotalCart = () =>{
        let sum = 0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                let itemInfo = all_product.find(product => product.id === Number(item))
                sum+= itemInfo.new_price * cartItem[item]
            }
        }
        return sum
    }
    const contextValue = {all_product,cartItem,getTotalCart, addCart, removeCart}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
