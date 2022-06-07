import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export function Header() {
    return (
        <header className="page-header">
            <div className="page-header__container container">
                <Logo />
                <Navigation />
            </div>
        </header>
    )
}