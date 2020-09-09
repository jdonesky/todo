import React, {Component} from "react";
import { Input } from '../../components/UI/Input/Input.js';
import { SelectAll } from "../../components/UI/Button/SelectAll";
import {TodoItems} from "../../components/TodoItems/TodoItems";
import classes from './Todo.module.css'


export default class Todo extends Component {
    state = {
        todoEntry: '',
        todoEntries: []
    };

    changeHandler = (event) => {
        this.setState({
            todoEntry: event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault()
        const entry = this.state.todoEntry;
        const entries = [...this.state.todoEntries, entry];
        this.setState({
            todoEntry: '',
            todoEntries: entries
        });
    }

    toggleAllHandler = () => {

    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler} className={classes.TodoForm}>
                    <SelectAll toggled = {this.toggleAllHandler} />
                    <Input changed={(event) => this.changeHandler(event)} type="text" value={this.state.todoEntry} placeholder="What needs to be done?"/>
                </form>
                <TodoItems items={this.state.todoEntries}/>
            </div>
        );
    }
}