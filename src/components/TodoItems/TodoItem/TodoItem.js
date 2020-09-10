import React from 'react';
import classes from './TodoItem.module.css'

const todoItem = (props) => {

    const iconClass = [classes.Icon]
    if (props.complete) {
        iconClass.push(classes.Checked);
    }

    return (
        <div className={classes.Container}>
            <span className={iconClass.join(" ")}></span>
            <li className={classes.Item}>{props.entry}</li>
        </div>
    );
}

export default todoItem;