import React, {useState} from 'react';

import classes from './Professors.module.css'
import ProfessorList from "./ProfessorsList/ProfessorsList";
import ProfessorFilter from "./ProfessorFilter/ProfessorFilter";
import {usePosts} from "../../hooks/usePosts";

const Professors = () => {
    const [professor] = useState([
        {id: 1, body: 'Nosovitski Badim Borisovich'},
        {id: 2, body: 'Petrosyan'},
        {id: 3, body: 'Ivanova'},
        {id: 4, body: 'Kylikova'},
        {id: 5, body: 'Shibaeva'},
        {id: 6, body: 'Elkin'}

    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = usePosts(professor, filter.sort, filter.query)


    return (
        <div className={classes.main}>
            <ProfessorFilter
                filter={filter}
                setFilter={setFilter}
            />
            <ProfessorList professor={sortedAndSearchedPosts} title={'Преподаватели'}/>
        </div>
    );
};

export default Professors;