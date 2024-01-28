import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

function Shop() {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offers/>
      <NewCollections />
      <NewsLetter />
      {/* <RelatedProducts/> */}
    </div>
  )
}

export default Shop
