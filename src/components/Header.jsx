import React from 'react';
import logo from '../Images/logo.jpg';
import '../header.css';

const Header = () => {
    return(
        <>
        <div className="header">
        <img src={logo} alt="logo" width='40' height='50'></img>
        <h1 className="hdline animate__animated animate__backInDown">Note Keeper</h1>

        {/* <input type="text" placeholder="Search.."></input> */}

        </div>
        </>

    );
};




export default Header;