import React from 'react';
import netflixLogoSvg from '../assets/images/netflix-logo.svg';

function Header() {
    return (
        <header className="w-full">
            <a href="/">
                <img className="col-xs-2" style={{ flex: '0 0 260px', minWidth: '200px', maxWidth: '240px' }} src={netflixLogoSvg} alt="Netflix Logo" />
            </a>
        </header>
    );
}

export default Header;
