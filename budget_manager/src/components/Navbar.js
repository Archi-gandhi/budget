import React from 'react'
import icon1 from "../assets/images/icon1.png"
import icon2 from "../assets/images/icon2.png"
import icon3 from "../assets/images/icon3.png"
import icon4 from "../assets/images/icon4.png"
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>

      <header>
        <nav>
            <div className="leftnav">
                <div className="logoimg">
                    <img src={logo}  alt="" />
                </div>
            </div>
            <div className="rightnav">
                <div className="leftrightnav">
                    <ul>
                      <Link to="/">

                        <li>Home</li>
                      </Link>
                      <Link to="/transact">
                        <li>Budget</li>
                      </Link>
                        
                        
                        
                          <Link to="/about">
                        <li>

                          About
                          </li>
                          </Link>
                          <a href="#services">
                        <li>

                          Services
                          </li>
                          </a>
                          <Link to="/contact">
                        <li>Contact Us</li>
                          </Link>
                          <Link to="/login">
                        <li>Login</li>
                          </Link>
                          <Link to="/signup">
                        <li>Sign Up</li>
                          </Link>
                    </ul>

                </div>
                <div className="rightrightnav">
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                    <img src={icon4} alt="" />
                </div>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
