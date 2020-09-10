import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import classes from './TodoItems.module.css';
import {Toolbar} from '../Toolbar/Toolbar'

export const TodoItems = props => {
    const items = props.items.map((item,i) => <TodoItem complete={item.complete} key={i} entry={item.entry}/>)
    let underCards = props.items.length ? (<React.Fragment><div className={classes.UnderList2}></div>
        <div className={classes.UnderList1}></div></React.Fragment>) : null

   return (
       <React.Fragment>
            <div className={classes.TodoList}>
                {items}
                {props.items.length ? <Toolbar /> : null}
                {underCards}
            </div>
       </React.Fragment>
   )
};

