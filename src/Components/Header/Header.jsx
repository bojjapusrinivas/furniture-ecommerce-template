import React from 'react'
import './Header.css'
import { Container,Row } from 'reactstrap';
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import {NavLink} from 'react-router-dom'


const nav_links = [
            {
              path :"home",
              display:"Home"
            },
            {
              path :"shop",
              display:"Shope"
            },
            {
              path :"cart",
              display:"Cart"
            }
]   

function Header() {
  return (
    <header class="header">
    <Container>
         <Row>
         <div className='nav-wrapper'>
            {/* LOGO SECTION */}
            <div className="logo">
              <img src={logo} alt="MultiMark" title='Multimark'/>
              <div>
              <h1>MULTIMARKI</h1>
              <p>Since 1995</p>
              </div>  
            </div>
            {/* NAVAGATION SECTION */}

            <div className="navagation">
              <ul className="nav-menu">
              {nav_links.map((value, key) => (
                <li className="nav-item" key={key}>
                  <NavLink 
                  to={value.path}
                  className={(navClass)=> navClass.isActive ? 'nav_active' : ""}
                  >{value.display}</NavLink>
                </li>
              ))}

              </ul>
            </div>

            {/* Nav Icons */}

            <div className="nav_icons">
                
              <span className='icon-heart'>
              <i class="ri-heart-line"></i>
                  </span>
                <span className='cart_icon'>
                <i class="ri-shopping-bag-line"></i>
                </span>

                <span className='user_icon'>
                  <img src={userIcon} alt="Usericon" title='Usericon' className='cart_icon user_icon'/>
                </span>

            </div>

            {/* MOBILE NAVTATION */}

            <div className='mobile_menu'>
              <span><i class="ri-menu-line"></i></span>
            </div>




    
            </div>


       
        </Row>
    </Container>
    </header>
  )
}

export default Header