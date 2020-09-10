import React from 'react';
import classes from './TodoItem.module.css'

const todoItem = (props) => {

    const checkBoxClass = [classes.Circle]
    if (props.complete) {
        checkBoxClass.push(classes.Checked);
    }

    const deleteXClass = [classes.Delete]

    return (
        <div className={classes.Container}>
            <span className={checkBoxClass.join(" ")}></span>
            <li className={classes.Item}>{props.entry}</li>
            <div className={deleteXClass} onClick={props.delete}></div>
        </div>
    );
}

export default todoItem;