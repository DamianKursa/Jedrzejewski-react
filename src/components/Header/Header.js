import React from 'react';
import './Header.scss'
import BurgerNav from '../BurgerNav/BurgerNav'
import logojedrzejewski from '../../assets/logojedrzejewski.png'
import {Link} from 'react-router-dom'

import CloseIcon from '../CloseIcon/CloseIcon'
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon'
const Header = (props) => {
    const openburger = props.burgerMenuIsOpen
    const lock = props.lock
    const cssClases= [openburger ? 'burger-nav--open': lock ? 'burger-nav--closed':'burger-nav']
    return (
        <header>
            <span className="upper-container">
                <div className="bar-container" onClick={props.handleOpenMenu}>
                    {openburger ? <CloseIcon /> : <HamburgerIcon />}
                </div>
                <img 
                    height="36px" 
                    width="176px"
                    className="logo" 
                    alt="Logo" 
                    src={logojedrzejewski}
                />
            </span>
            <BurgerNav className={cssClases}/>
        
            <section className="header-content">
                <h2 className=" header-title header-title--big">Organizujemy śluby i przyjęcia okolicznościowe</h2>
                <h3 className=" header-title header-title--medium">Zadbamy o waszą wyjątkową chwile</h3>
                <Link className="btn__main" to='/servicepage'>Zaplanuj z nami swój ślub</Link>

            </section>
        </header>
    );
};

export default Header;