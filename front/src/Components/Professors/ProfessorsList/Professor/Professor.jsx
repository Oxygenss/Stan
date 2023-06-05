import React from 'react';
import classes from "./Professor.module.css";
import {NavLink} from "react-router-dom";
import MyButton from "../../../../UI/Button/MyButton";

const Professor = (props) => {
    let path = "/professors/" + props.id;
    return (
        <div>
            <div className={classes.professor}>
                <h1>{props.professor.body}</h1>
                <NavLink to={path}>
                    <MyButton text='Перейти'/>
                </NavLink>
            </div>
        </div>
    );
};

export default Professor;