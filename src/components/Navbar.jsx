import React from 'react';
import Hamburger from './HamburgerDrawer';
import './NavInshorts.css';
// import Toggle from './Toggle';
import useDarkMode from "./Toggle";
import { BsMoon, BsSun } from "react-icons/bs";

const Navbar = ({ setCategory }) => {
    const [isDarkMode, setDarkMode] = useDarkMode();
    return ( <
        div className = "nav" > <
        div className = "icon" > < span className = "menu" > View < /span> <
        Hamburger setCategory = { setCategory }
        / > < /
        div > <
        img style = {
            { cursor: "pointer" }
        }
        src = "https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height = "80%"
        alt = "logo" >

        <
        /img> 

        <
        button className = "toggle_btn"
        onClick = {
            () => setDarkMode(!isDarkMode)
        } > {
            isDarkMode ? ( <
                BsSun color = "#ff0"
                size = "24"
                title = "Switch to light mode" / >
            ) : ( <
                BsMoon size = "24"
                title = "Switch to dark mode" / >
            )
        } <
        /button>

        <
        /
        div >

    );
}
export default Navbar;