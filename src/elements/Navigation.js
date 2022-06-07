import React from 'react';
import { NavigationItem } from './NavigationItem';

export function Navigation() {
    return <ul className='nav-menu'>
                <NavigationItem category = "Galeria"/>
                <NavigationItem category = "Galeria Przed / PO"/>
                <NavigationItem category= "Kontakt"/>
            </ul>
}