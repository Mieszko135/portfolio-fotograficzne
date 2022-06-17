import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { MobileNavigation } from './MobileNavigation';

export function Header() {
    return (
        <header className="page-header">
            <div className="page-header__container container">
                <Logo />
                <Navigation />
                <MobileNavigation />
            </div>
        </header>
    )
}