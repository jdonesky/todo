import React, {Component} from "react";
import { Input } from '../../components/UI/Input/Input.js';
import { SelectAll } from "../../components/UI/Button/SelectAll";
import {TodoItems} from "../../components/TodoItems/TodoItems";
import classes from './Todo.module.css'


export default class Todo extends Component {
    state = {
        todoEntry: '',
        todoEntries: [],
        allComplete: false
    };

    componentDidUpdate(prevProps,prevState) {
        if (this.state.todoEntries.every(entry => entry.complete) && !prevState.todoEntries.every(entry => entry.complete)) {
            this.setState({
                allComplete: true
            })
        }
        if (this.state.todoEntries.every(entry => entry.complete === false) && !prevState.todoEntries.every(entry => entry.complete === false)) {
            this.setState({
                allComplete: false
            })
        }
    }

    changeHandler = (event) => {
        this.setState({
            todoEntry: event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        const entry = this.state.todoEntry;
        const entries = [...this.state.todoEntries, {entry:entry, complete: false}];
        this.setState({
            todoEntry: '',
            todoEntries: entries
        });
    }

    toggleAllHandler = () => {
        if (this.state.todoEntries.every(entry => entry.complete)) {
            this.setState({
                todoEntries: this.state.todoEntries.map(entry => {return {...entry, complete: false}})
            })
        } else {
            this.setState({
                todoEntries: this.state.todoEntries.map(entry => {return {...entry, complete: true}})
            })
        }



        // if (!this.state.allComplete) {
        //     this.setState({
        //         todoEntries: this.state.todoEntries.map(item => {return {...item, complete: true}})
        //     })
        // } else {
        //     this.setState({
        //         todoEntries: this.state.todoEntries.map(item => {return {...item, complete: false}})
        //     })
        // }
    }

    toggleCheckHandler = (i) => {
        const entries = [...this.state.todoEntries];
        entries[i].complete = !entries[i].complete
        this.setState({
            todoEntries: entries
        })
    }

    deleteHandler = (i) => {
        const entries = [...this.state.todoEntries];
        entries.splice(i,1)
        this.setState({
            todoEntries: entries
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler} className={classes.TodoForm}>
                    <SelectAll active={this.state.allComplete} toggled={this.toggleAllHandler} show={this.state.todoEntries.length}/>
                    <Input changed={(event) => this.changeHandler(event)} type="text" value={this.state.todoEntry} placeholder="What needs to be done?"/>
                </form>
                <TodoItems items={this.state.todoEntries} toggleCheck={this.toggleCheckHandler} delete={this.deleteHandler}/>
            </div>
        );
    }
}