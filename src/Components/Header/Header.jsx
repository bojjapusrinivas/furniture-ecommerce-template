import React, { useRef, useEffect } from "react";
import "./Header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {useSelector} from "react-redux"

const nav_links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shope",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

function Header() {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity )

  

  const stickyHeaderFun = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFun();
    return () => window.removeEventListener("scroll", stickyHeaderFun);
  });

  const togglemenu = () => menuRef.current.classList.toggle("mobil-menu-active")

  const navagate = useNavigate();
  const navagateToCart = ()=>{
      navagate("/cart")

  }


  return (
    <header class="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav-wrapper">
            {/* LOGO SECTION */}
            <div className="logo">
              <img src={logo} alt="MultiMark" title="Multimark" />
              <div>
                <h1>MULTIMARKI</h1>
                <p>Since 1995</p>
              </div>
            </div>
            {/* NAVAGATION SECTION */}

            <div className="navagation" ref={menuRef} onClick={togglemenu}>
              <ul className="nav-menu">
                {nav_links.map((value, key) => (
                  <li className="nav-item" key={key}>
                    <NavLink
                      to={value.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {value.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nav Icons */}

            <div className="nav_icons">
              <span className="icon-fav">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart_icon" onClick={navagateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              <span className="user_icon">
                <motion.img
                  whileTap={{ scale: "1.2" }}
                  src={userIcon}
                  alt="Usericon"
                  title="Usericon"
                  className="cart_icon user_icon"
                />
              </span>
              <div className="mobile_menu" >
                <span onClick={togglemenu}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>

            {/* MOBILE NAVTATION */}
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
