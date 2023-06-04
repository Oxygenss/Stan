import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
const setActive = ({isActive}) => isActive ? classes.active : classes.inActive;
const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div>
                <NavLink to='/professors' className={setActive} > Professors </NavLink>
            </div>
            <div>
                <NavLink to='/classes' className={setActive}> Classes </NavLink>
            </div>
            <div>
                <NavLink to='/facultys' className={setActive}> Faculty's </NavLink>
            </div>
        </div>
    );
};

export default Navbar;