import React from 'react';
import Class from "../Classes/Class/Class";
import classes from './Faculty.module.css'

const Faculty = (props) => {
    let Faculty = props.state.Faculty
        .map(a => <Class name={a.name} id={a.id}/>)

    return (
        <div className={classes.list}>
            {Faculty}
        </div>
    );
};

export default Faculty;