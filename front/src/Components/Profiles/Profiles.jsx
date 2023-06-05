import React, {useState} from 'react';

import classes from './Profiles.module.css'
import PostList from "./PostList/PostList";
import PostForm from "../PostForm/PostForm";
import PostFilter from "../PostFilter/PostFilter";
import {usePosts} from "../../hooks/usePosts";

const Profiles = (props) => {
    const [posts, setPosts] = useState([
        {id: 1, body: 'гг'},
        {id: 2, body: 'сс'},
        {id: 3, body: 'оо'},
        {id: 4, body: 'лл'}

    ])

    const [filter, setFilter] = useState({sort:'', query: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)



    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className={classes.main}>
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Все отзывы'}/>

        </div>
    );
};

export default Profiles;