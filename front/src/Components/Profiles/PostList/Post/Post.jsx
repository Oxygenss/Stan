import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
            <div className={classes.post}>
                <div className="postContent">
                    <strong>{props.number}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
            </div>
    );
};

export default Post;