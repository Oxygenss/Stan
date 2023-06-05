import React from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MySelect from "../../UI/Select/MySelect";

const PostFilter = ({filter, setFilter}) => {


    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e=>setFilter({...filter, query: e.target.value})}
                placeholder='Поиск....'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортировка по'
                options={[
                    {value: 'body', name:'По содержанию'},
                    {value: 'title', name:'По названию'}
                ]}
            />
        </div>
    );
};

export default PostFilter;