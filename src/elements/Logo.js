import React from 'react';
import ReactDOM from 'react-dom/client';

import pageLogo from "../images/camera.svg"

export function Logo() {

    return (
        <div className="header__logo logo">
            <img src={pageLogo} alt="Aparat fotograficzny, ikona"/>
            <span className="owner-name">Mieszko Braun</span> Fotografia
        </div>
        )
}