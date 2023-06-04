import React from 'react';
import classes from './Professors.module.css'
import Professor from "./Professor/Professor";
const Professors = (props) => {

    let professors = props.state.professors
        .map(a => <Professor name={a.name} id={a.id}/>)


    return (
        <div className={classes.list}>
            <div>
                {professors}
            </div>
        </div>
    );
};

export default Professors;