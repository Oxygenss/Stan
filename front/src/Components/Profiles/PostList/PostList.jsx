import React from 'react';
import Post from "./Post/Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Отзывов нет!
            </h1>
        )
    }

    return (
        <div>
            <h1>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={posts.id}
                        timeout={500}
                        classNames='post'
                    >
                        <Post remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>)
};

export default PostList;