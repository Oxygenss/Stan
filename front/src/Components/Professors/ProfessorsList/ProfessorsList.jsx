import React from 'react';
import classes from "../Professors.module.css";
import Professor from "./Professor/Professor";

const ProfessorList = ({posts, title}) => {

    return (
        <div className={classes.main}>
            <h1 className={classes.title}>{title}</h1>
            {posts.map((post, index) =>
                <Professor  number={index + 1} post={post} key={posts.id}/>
            )}

        </div>)
};

export default ProfessorList;