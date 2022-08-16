import React from 'react';
import HelpCenter from "../footer/HelpCenter";
import General from "../footer/General";
import AccPayments from "../footer/AccPayments";
import "../footer/Footer.css";

const Footer = () => {
    return (
        <>
            <footer>
                
                <HelpCenter />

                <General />

                <AccPayments />

            </footer>
        </>
    )
}

export default Footer
