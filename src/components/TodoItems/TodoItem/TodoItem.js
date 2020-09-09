import React from 'react';
import classes from './TodoItem.module.css'
const todoItem = (props) => {
    return (
        <div className={classes.Container}>
            <li className={classes.Item}>{props.entry}</li>
        </div>
    );
}

export default todoItem;