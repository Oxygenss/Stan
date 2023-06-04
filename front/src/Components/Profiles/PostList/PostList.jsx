import React from 'react';
import classes from "../Profile.module.css";
import Post from "./Post/Post";

const PostList = ({posts, title}) => {
    return (
        <div className={classes.main}>
            <h1 className={classes.title}>{title}</h1>
            {posts.map((post, index) =>
                <Post number={index + 1} post={post} key={posts.id}/>
            )}

        </div>)
};

export default PostList;