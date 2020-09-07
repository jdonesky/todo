import React from 'react';
import TodoItem from './todoItem'

const todoItems = props => props.items.map(item => <TodoItem entry={item}/>)

export default todoItems;