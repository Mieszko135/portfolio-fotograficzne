import React from 'react';
import { NavigationItem } from './NavigationItem';

export function Navigation() {
    return <nav className='nav-menu'>
                <ul className="nav-menu__items">
                <NavigationItem category = "Galeria"/>
                <NavigationItem category = "Galeria Przed / Po"/>
                <NavigationItem category= "Kontakt"/>
                </ul>
            </nav>
}