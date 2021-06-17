import React from 'react';
import '../footer.css';

const Footer = () => {

    const year = new Date().getFullYear();   // this will give me the CURRENT YEAR

    return(
        <>
         <footer id='footer'>
             <p>copyright © {year}</p>
         </footer>
        </>

    );
};




export default Footer;