import React from "react"
import './Navbar.css'
import Tooglee from "../../Toogle/Toogle";
import {Link} from 'react-scroll'
const Navbar = () =>{
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Kavishka</div>
                <Tooglee/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyle: 'none'}}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                        <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>                        
                        <li>Academics</li>
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">
                        Contact
                </button>
            </div>
        </div>
    );
}

export default Navbar;