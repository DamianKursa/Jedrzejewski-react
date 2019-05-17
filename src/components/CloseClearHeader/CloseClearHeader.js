import React from 'react';
import CloseIcon from '../CloseIcon/CloseIcon'
import {NavLink} from 'react-router-dom'
import '../NavHeader/NavHeader.scss'
const CloseClearHeader = () => {
    return (
        <div className='nav-header nav-header--closeclear'>
            <NavLink to='/' className="nav-link">
                <CloseIcon/>
            </NavLink>
            <NavLink to='/' className="nav-link">
                <p>Wyczyść</p>
            </NavLink>


        </div>
    );
};

export default CloseClearHeader;