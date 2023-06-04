import React from 'react';
const Profiles = (props) => {
    console.log(props.index);
    console.log(props.state.professors);
    return (
        <div >
            name: {props.name}
        </div>
    );
};

export default Profiles;