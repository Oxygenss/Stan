import React, {useState} from 'react';

import classes from './Profiles.module.css'
import PostList from "./PostList/PostList";
import PostForm from "./PostForm/PostForm";
import PostFilter from "./PostFilter/PostFilter";
import {usePosts} from "../../hooks/usePosts";
import MyModal from "../../UI/MyModal/MyModal";
import MyButton from "../../UI/Button/MyButton";

const Profiles = (props) => {
    const [posts, setPosts] = useState([
        {id: 1, body: 'гг'},
        {id: 2, body: 'сс'},
        {id: 3, body: 'оо'},
        {id: 4, body: 'лл'}

    ])

    const [filter, setFilter] = useState({sort:'', query: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const[modal, setModal] = useState(false)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className={classes.main}>
            <MyButton onClick={() => setModal(true)}>
                Добавить отзыв
            </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm create={createPost}/>
            </MyModal>

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