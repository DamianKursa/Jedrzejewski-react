import React from 'react';
import './NavHeader.scss'
import {NavLink} from 'react-router-dom'
import peopleIcon from '../../assets/liczbaosob-icon.svg';
import backIcon from '../../assets/back-icon.svg'
import calendarIcon from '../../assets/calendar-icon.svg'
import calendarsSecondIcon from '../../assets/calendar-second-icon.svg'
import {withRouter} from 'react-router-dom';

const NavHeader = (props) => {
    return (
        <header className="nav-header">
            <NavLink className="nav-link" to="/">
                <img className='icons' src={backIcon} alt="back-icon" />
            </NavLink>

            <NavLink className="nav-link nav-link--nav-link-line " to="/guests">
                <img className='icons' src={peopleIcon} alt="people-icon" />
                Liczba osób
            </NavLink>

            <NavLink className="nav-link nav-link--nav-link-line" to="/">
                <img className='icons' src={calendarIcon} alt="calendar-icon" />
                Data
            </NavLink>
            <NavLink className="nav-link" to="/">
                <img className='icons' src={calendarsSecondIcon} alt="people-icon" />    
            </NavLink>
            
    </header>
    );
};

export default withRouter(NavHeader);