import React from 'react';
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavMiddle = () => {
    return (
        <>
            <div className="nav-middle">
                    <div id="techshed">
                        
                        <Link to="/"> <h1>TechShed</h1> </Link>

                        <div class="search-container">
                            
                            <input type="text" placeholder="Search..." name="search"/>
                            <button type="submit">  <BsSearch />    </button>

                        </div>
                    </div>

                
            </div>
        </>
    )
}

export default NavMiddle
