import React from 'react';
import { NavigationItem } from './NavigationItem';
import { Link } from "react-router-dom";

export function Navigation() {
    return <nav className='nav-menu'>
                <ul className="nav-menu__items">
                <Link to="/gallery"><NavigationItem category = "Galeria"/></Link>
                <Link to="/gallerybeforeafter"><NavigationItem category = "Galeria Przed / Po"/></Link>
                <Link to="/contact"><NavigationItem category= "Kontakt"/></Link>
                </ul>
            </nav>
}