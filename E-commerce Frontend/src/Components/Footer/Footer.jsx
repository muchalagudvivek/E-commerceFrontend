import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>


      <ul className="footer-links">
        <li>Company
          <li className="footer-li">ABOUT</li>
          <li className="footer-li">BLOG</li>
          <li className="footer-li">PRESS</li>
          <li className="footer-li">JOBS</li>
          <li className="footer-li">PARTNERS</li>

        </li>
        <li>Solutions
          <li className="footer-li">MARKETING</li>
          <li className="footer-li">SUPPORTS</li>
          <li className="footer-li">SERVICES</li>
          <li className="footer-li">ANALYTICS</li>

        </li>
        <li>Offices
          <li className="footer-li">Bangalore</li>
          <li className="footer-li">Karnataka</li>
          <li className="footer-li">India</li>
        </li>
        <li>Legal
          <li className="footer-li">PRIVACY</li>
          <li className="footer-li">TERMS</li>
          <li className="footer-li">GUIDES</li>
          <li className="footer-li">API STATUS</li>
        </li>
        <li>Contact Us
          <li className="footer-li">Address : Hill Towers,Hyderabad</li>
          <li className="footer-li">Email : shopper@gmail.com</li>
          <li className="footer-li">Call : 0123456789</li>
        </li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
