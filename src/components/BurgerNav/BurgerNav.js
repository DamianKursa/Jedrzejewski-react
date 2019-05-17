import React from 'react';
import './BurgerNav.scss'
const BurgerNav = (props) => {
    return (
        <nav className={props.className} >
            <ul className="nav-list">
                <li className="nav-item">STRONA GŁÓWNA</li>
                <li className="nav-item">WESELA</li>
                <li className="nav-item">KOMUNIE</li>
                <li className="nav-item">IMPREZY OKOLICZNOŚCIOWE</li>
                <li className="nav-item">DEKORACJE</li>
                <li className="nav-item">CATERING</li>
                <li className="nav-item">FOTOGRAFIA</li>
                <li className="nav-item">KONTAKT</li>
            </ul>
        </nav>
    );
};

export default BurgerNav;