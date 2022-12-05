import React from 'react'
import './Navbar.css'
import Logo from "../../assist/images/Logo.png"
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title"> <img src={Logo} /></div>
                </div>
                <div className="nav-btn">
                    <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                
                <div className="nav-links">
                    <Link to="/" >الرئيسية</Link>
                    <Link to="/Products" >المنتجات</Link>
                    <Link to="/Shopping">عربة التسوق</Link>
                    <Link to="/About" >من نحن</Link>
                    <Link to="/Contact" >اتصل بنا</Link>
                </div>
                </div>
        </>
    )
}

export default Navbar