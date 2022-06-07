import React, {useState} from 'react';
import { NavigationItem } from "./NavigationItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";

export function MobileNavigation() {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <GiHamburgerMenu className="hamburger-menu" size="60px" color="orangered" onClick={() => setOpen(!open)}/>;

    const closeIcon = <CgCloseO className="close-menu" size="60px" color="orangered" onClick={() => setOpen(!open)}/>

    return (
        <nav className='nav-menu-mobile'>
            {open ? closeIcon : hamburgerIcon}
            {open &&
                <ul className="nav-menu-mobile__items">
                    <NavigationItem category = "Galeria" delay = {0.10}/>
                    <NavigationItem category = "Galeria Przed / Po" delay = {0.20}/>
                    <NavigationItem category= "Kontakt" delay = {0.30}/>
                </ul>
            }

        </nav>
    );
}