import React from 'react';
import classes from './Profile.module.css'
const Profiles = (props) => {
    console.log(props.index);
    console.log(props.state.professors);
    return (
        <div className={classes.main}>
            name: {props.name}
        </div>
    );
};

export default Profiles;