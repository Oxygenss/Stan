import React from 'react';
import classes from "./Post.module.css";
import MyButton from "../../../../UI/Button/MyButton";

const Post = (props) => {
    return (
            <div className={classes.post}>
                <div className="postContent">
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
    );
};

export default Post;