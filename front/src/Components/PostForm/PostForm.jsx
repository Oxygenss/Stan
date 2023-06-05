import React, {useState} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/Button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({ body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({body: ''})

    }

    return (
        <form>
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body:e.target.value})}
                type="text"
                placeholder="Описание поста"/>
            <MyButton onClick={addNewPost}> Оставить отзыв</MyButton>
        </form>
    );
};

export default PostForm;