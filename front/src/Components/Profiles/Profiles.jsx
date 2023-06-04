import React, {useState} from 'react';

import classes from './Profile.module.css'
import PostList from "./PostList/PostList";
import MyButton from "../../UI/Button/MyButton";
import MyInput from "../../UI/MyInput/MyInput";

const Profiles = (props) => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Хороший', body: 'description'},
        {id: 2, title: 'Плохой', body: 'description'},
        {id: 3, title: 'Норм', body: 'description'},
        {id: 4, title: 'Отличный', body: 'description'}

    ])

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost])
        setTitle('')
        setBody('')

    }

    return (
        <div className={classes.main}>
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Название поста"/>
                <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text"
                    placeholder="Описание поста"/>
                <MyButton onClick={addNewPost}> Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'Все посты'}></PostList>
        </div>
    );
};

export default Profiles;