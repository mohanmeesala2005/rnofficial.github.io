import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './navbar.css'

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    const navbarList = document.querySelector('.navbar-list');
    if (navbarList) {
      navbarList.style.display = isOpen ? 'none' : 'inline';
    }
  };
  
  return (
    <div className="navbar">
      <div>
        <img className="navbar_logo" src="../src/assets/rnlogowhite.png" alt="logo" />
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link"
            >
              ABOUT US
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link"
            >
              EVENTS
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass='active'
              to="team"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link"
            >

              VIDEO AND SERIES
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link"
            >

              TEAM RN
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass='active'
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link">

                  SPONSERS
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link"
            >
                OUR ALUMNI
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link"
            >
              GALLERY
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              activeClass='active'
              to="contactus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="navbar-link">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default navbar