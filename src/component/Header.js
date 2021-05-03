import React from 'react';
import Link from './Link'

const Header = () => {
    console.log(window.location);
    return (

        <div className="ui secondary pointing menu">
            <Link path="/" name="Accordion" />
            <Link path="/list" name="Search" />
            <Link path="/dropdown" name="Dropdown" />
            <Link path="/translate" name="Translate"></Link>
        </div>
    );
}

export default Header;