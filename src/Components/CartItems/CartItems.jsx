import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product,getTotalCart, cartItem, removeCart } = useContext(ShopContext);

  return (
    <div className='cart-item'>
      <div className='cart-item--main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item, index) => {
        if (cartItem[item.id] > 0) {
          return (
            <div key={item.id}> 
              <div className='cart-item-format cart-item--main'>
                <img src={item.image} alt={item.title} className='cart-item--img' />
                <p>{item.name}</p> 
                <p>${item.new_price}</p> 
                <button className='cart-item--quantity'>{cartItem[item.id]}</button> 
                <p>${item.new_price * cartItem[item.id]}</p>
                <img className='cart-item--remove' src={remove_icon} alt='Remove' onClick={() => removeCart(item.id)} /> {/* Sử dụng removeCart(item.id) */}
              </div>
              <hr />
            </div>
          );
        } else {
          return null; 
        }
      })}
      <div className='cart-item--down'>
        <div className="cart-item--total">
            <h1>Cart Totals</h1>
            <div className='cart-item--total__list'>
                <p>Subtatal</p>
                <p>${getTotalCart()}</p>
            </div>
            <hr />
            <div className='cart-item--total__list'>
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr />
            <div className='cart-item--total__list'>
                <h3>Total</h3>
                <h3>${getTotalCart()}</h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-item--promocode">
            <p>If you have a promo code , Enter here</p>
            <div className="cart-item--promobox">
                <input type="text" placeholder='promo code'/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;