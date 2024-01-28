import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props
    const {addCart} = useContext(ShopContext)
  return (
    <div className='product-display'>
      <div className='product-display--left'>
        <div className='product-display__list'>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div>
            <img className='product-display-main' src={product.image} alt="" />
        </div>
      </div>
      <div className='product-display--right'>
            <h1>{product.name}</h1>
            <div className='product-display--star'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" /> 
            <span>(122)</span>

            </div>
            <div className='product-display--price'>
                <span className='product-display--price__old'>${product.old_price}</span>
                <span className='product-display--price__new'>${product.new_price}</span>
            </div>
            <div className='product-display--description'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam voluptate illum maxime? Inventore reprehenderit doloribus fugiat?
            </div>
            <div className='product-display--select-size'>Select Size</div>
            <ul className='product-display--size'>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
            </ul>
            <button className='product-display--btn' onClick={() =>{addCart(product.id)}}>ADD TO CART</button>
            <p className='product-display__category'><span>Category: </span>Women, T-shirt, Crop Top</p>
            <p className='product-display__category'><span>Tags: </span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
