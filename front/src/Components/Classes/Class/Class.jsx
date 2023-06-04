import React from 'react';
import {NavLink} from "react-router-dom";
const Class = (props) => {
    let path = "/classes/" + props.id;
    return (
        <div>
            <div>
                <NavLink  to={path}> {props.name} </NavLink>
            </div>
        </div>
    );
};

export default Class;