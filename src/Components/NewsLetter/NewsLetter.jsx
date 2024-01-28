import React from 'react'
import  './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Ofeers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div className='news-letter-box'>
            <input className='news-letter__input' type='email' placeholder='Your Email ID'/>
            <button className='news-letter__btn'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
