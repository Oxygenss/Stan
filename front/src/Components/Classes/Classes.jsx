import React from 'react';
import classes from './Classes.module.css'
import Class from "./Class/Class";
const Classes = (props) => {
    let subjects = props.state.ClassesEnum
        .map(a => <Class name={a.name} id={a.id}/>)

    return (
        <div className={classes.list}>
            {subjects}
        </div>
    );
};

export default Classes;