import React from 'react';
import TodoItem from './TodoItem/TodoItem'

export const TodoItems = props => props.items.map(item => <TodoItem entry={item}/>)

