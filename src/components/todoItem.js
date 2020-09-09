import React from 'react';

const todoItem = (props) => {
    return (
        <div>
            <li>{props.entry}</li>
        </div>
    );
}

export default todoItem;