import React from 'react'
import logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt="logo" />
            <span>Shopper</span>
        </div>
        <ul className='footer-list'>
            <li className='footer-item'>Company</li>
            <li className='footer-item'>Products</li>
            <li className='footer-item'>Offices</li>
            <li className='footer-item'>About</li>
            <li className='footer-item'>Contact</li>
        </ul>
        <ul className='footer-socials'>
            <li className='footer-social-item'><Link to='/'><img src={instagram_icon} alt="" /></Link></li>
            <li className='footer-social-item'><Link to='/'><img src={pintester_icon} alt="" /></Link></li>
            <li className='footer-social-item'><Link to='/'><img src={whatsapp_icon} alt="" /></Link></li>
        </ul>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
