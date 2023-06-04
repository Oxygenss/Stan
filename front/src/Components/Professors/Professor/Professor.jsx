import React from 'react';
import {NavLink} from "react-router-dom";
const Professor = (props) => {
    let path = "/professors/" + props.id;
    return (
            <div>
                <NavLink  to={path}> {props.name} </NavLink>
            </div>
    );
};

export default Professor;