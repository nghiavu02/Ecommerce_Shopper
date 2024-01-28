import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
        <img className='shop-category-banner' src={props.banner} alt="" />
        <div className='shop-category__title'>
          <div>
            <b>Showing 1-12</b> out of 36 products
          </div>
          <div className='shop-category__sort'>
            <span>Sort by </span>
            <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className='shop-category-list'>
          {all_product.map((item, index) =>{
            if(props.category === item.category){
              return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }else{
              return null
            }
          })}
        </div>
    </div>
  )
}

export default ShopCategory
