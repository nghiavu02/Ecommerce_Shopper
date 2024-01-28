import React from 'react'
import './RelatedProducts.css'
import data from '../Assets/data'
import Item from '../Item/Item'
const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <div className='relatedproducts-title'>
        <h1>RelatedProducts in women</h1>
        <hr/>
      </div>
      <div className='relatedproducts-item'>
        {data?.map((item, index) =>(
             <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts 
