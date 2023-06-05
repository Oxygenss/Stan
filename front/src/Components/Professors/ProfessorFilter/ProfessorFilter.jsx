import React from 'react';
import MyInput from "../../../UI/Input/MyInput";

const ProfessorFilter = ({filter, setFilter}) => {


    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e=>setFilter({...filter, query: e.target.value})}
                placeholder='Поиск....'
            />
        </div>
    );
};

export default ProfessorFilter;