import React from 'react'
import { FaBox } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavTop = () => {
    return (
        <>
            <div className="nav-top">

                <div>
                    
                    <FaBox />
                    <p>
                        
                        Free Shipping for orders over $50

                    </p>

                </div>

                <nav>

                    <ul>

                        <li><Link to='/about' >About</ Link> </li>
                        <li><Link to='/contact' >Contact</ Link> </li>

                    </ul>

                </nav>
                
            </div>
        </>
    )
}

export default NavTop
