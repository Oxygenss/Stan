import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import MyButton from "../../UI/Button/MyButton";

/*const setActive = ({isActive}) => isActive ? classes.active : classes.inActive;*/
const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div>
                <NavLink to='/professors'>
                    <MyButton text='Professors'/>
                </NavLink>
            </div>
            <div>
                <NavLink to='/classes'>
                    <MyButton text='Classes'/>
                </NavLink>
            </div>
            <div>
                <NavLink to='/facultys'>
                    <MyButton text='Faculty'/>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;