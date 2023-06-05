import React from 'react';
import classes from "./Professor.module.css";
import {NavLink} from "react-router-dom";
const Professor = (props) => {
    let path = "/professors/" + props.id;
    return (
            <div className={classes.professor}>
                <div className="postContent">
                    <div>
                        <NavLink to={path}> {props.post.body} </NavLink>
                    </div>
                </div>
            </div>
    );
};

export default Professor;