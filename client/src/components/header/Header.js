import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import Darkmode from '../Darkmode'

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className={toggle ? "navbar expanded" : "navbar"}>
        <div className="container">

          <h2 className="logo">My Portfolio</h2>

          <ul className="links">
            <li className="links-li"><Link to="/">Home</Link></li>
            <li className="links-li"><Link to="/about">About Me</Link></li>
            <li className="links-li"><Link to="/portfolio">Portfolio</Link></li>
            <li className="links-li"><Link to="/contact">Contact</Link></li>
            <li><Darkmode /></li>
          </ul>

          {/* MOBILE MENU ICON */}
          {/* <div className="toggle-icons" onClick={handleToggle}>
            {toggle ? <IoMdCloseCircleOutline /> : <BiMenuAltRight />}
          </div> */}

        </div>
      </nav>
    </>
  );
};

export default Header;
