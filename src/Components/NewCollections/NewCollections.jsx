import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className='new-collections'>
        <div className='new-collections-title'>
        <h1>New Collections</h1>
        <hr/>
        </div>
        <div className='collections'>
            {new_collections.map((item, index) => {
                return <Item key={index} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections
