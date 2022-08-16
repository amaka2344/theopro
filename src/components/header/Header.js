import React from 'react';
import NavTop from "../header/NavTop";
import NavMiddle from "../header/NavMiddle";
import MobileNavigation from "../header/MobileNavigation";
import  "../header/Header.css";

const Header = () => {
    return (
        <>
            <header>

                <NavTop />
                <NavMiddle />
                <MobileNavigation />  
                
            </header>
        </>
    )
}

export default Header
