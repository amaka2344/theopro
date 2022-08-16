import React from 'react';
import { Link } from "react-router-dom";
import { RiAccountCircleFill, RiHeart3Line } from "react-icons/ri";

const MobileNavLinks = () => {
    return (
        <>
            <div className="mobile">

                <div>

                    <nav >

                        
                        
                        
                        <ul className="mobile-middle">
                            <li><Link to='/about' >About</ Link> </li>
                            <li><Link to='/contact' >Contact</ Link> </li>
                        </ul>

                        <ul className="mobile-bottom">
                        </ul>

                    </nav>

                </div>  

                <div>

                    <nav className="mobile-nav-col">

                        <ul>

                            <li> <Link to='/' > Shop All </ Link> </li>
                            <li> <Link to='/' > Computers </ Link> </li>
                            <li> <Link to='/' > Tablets </ Link> </li>
                            <li> <Link to='/' > Drones and Cameras </ Link> </li>
                            <li> <Link to='/' > Audio </ Link> </li>
                            <li> <Link to='/' > Mobile </ Link> </li>
                            <li> <Link to='/' > T.V and Home Cinema </ Link> </li>
                            <li> <Link to='/' > Wearable Tech </ Link> </li>
                            <li> <Link to='/' > Sale </ Link> </li>

                        </ul>

                    </nav>

                </div>

            </div>
        </>
    )
}

export default MobileNavLinks
