import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import classes from './TodoItems.module.css';
import {Toolbar} from '../Toolbar/Toolbar'

export const TodoItems = props => {
    let items;
    switch (props.activeTab) {
        case 'All':
            items = props.items
            break;
        case 'Active':
            items = props.items.filter(item => !item.complete)
            break;
        case 'Completed':
            items = props.items.filter(item => item.complete)
            break;
        default:
            break;
    }
    items = items.map((item,i) => <TodoItem complete={item.complete} key={i} entry={item.entry} toggleCheck={() => props.toggleCheck(i)} delete={() => props.delete(i)}/>)
    const anyIncomplete= props.items.filter(item => !item.complete).length
    const anyComplete = props.items.filter(item => item.complete).length

    let underCards = props.items.length ? (<React.Fragment><div className={classes.UnderList2}></div>
        <div className={classes.UnderList1}></div></React.Fragment>) : null

   return (
       <React.Fragment>
            <div className={classes.TodoList}>
                {items}
                {props.items.length ? <Toolbar incomplete={anyIncomplete} complete={anyComplete} clearCompleted={props.clearCompleted} switchTab={props.switchTab} activeTab={props.activeTab}/> : null}
                {underCards}
            </div>
       </React.Fragment>
   )
};

