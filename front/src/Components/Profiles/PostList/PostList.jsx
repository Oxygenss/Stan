import React from 'react';
import classes from "../Profiles.module.css";
import Post from "./Post/Post";

const PostList = ({posts, title, remove}) => {
    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Отзывов нет!
            </h1>
        )
    }

    return (
        <div className={classes.main}>
            <h1 className={classes.title}>{title}</h1>
            {posts.map((post, index) =>
                <Post remove={remove} number={index + 1} post={post} key={posts.id}/>
            )}

        </div>)
};

export default PostList;