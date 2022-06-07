import React from 'react';
import ReactDOM from 'react-dom/client';

import pageLogo from "../images/camera.svg"

export function Logo() {

    return (
        <div className="header__logo logo">
            <img className="logo__icon" src={pageLogo} alt="Aparat fotograficzny, ikona"/>
            <div className="logo__text"><span className="owner-name">Mieszko Braun</span> Fotografia</div>
        </div>
        )
}