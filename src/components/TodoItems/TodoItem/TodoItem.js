import React from 'react';
import classes from './TodoItem.module.css'

const todoItem = (props) => {

    const checkBoxClass = [classes.Circle]
    const itemClass = [classes.Item]
    if (props.complete) {
        checkBoxClass.push(classes.Checked);
        itemClass.push(classes.Complete)
    }

    const deleteXClass = [classes.Delete]


    return (
        <div className={classes.Container}>
            <div className={checkBoxClass.join(" ")} onClick={props.toggleCheck}></div>
            <li className={itemClass.join(" ")}>{props.entry}</li>
            <div className={deleteXClass} onClick={props.delete}></div>
        </div>
    );
}

export default todoItem;