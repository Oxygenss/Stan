import React from 'react';
import classes from "../Professors.module.css";
import Professor from "./Professor/Professor";

const ProfessorList = ({professor, title}) => {

    return (
        <div className={classes.main}>
            <h1 className={classes.title}>{title}</h1>
            {professor.map((a) =>
                <Professor professor={a} key={professor.id}/>
            )}

        </div>)
};

export default ProfessorList;