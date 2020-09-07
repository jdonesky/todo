import React, {Component} from 'react';

import './App.css';
import TodoItems from './components/todoItems.js'

export default class App extends Component {
    state = {
        todoEntry: '',
        todoEntries: []
    };

    onChangeHandler = (event) => {
        this.setState({
            todoEntry: event.target.value
        });
    }

    onSubmitHandler = () => {
        const entry = this.state.todoEntry;
        const entries = [...this.state.todoEntries, entry];
        this.setState({
            todoEntry: '',
            todoEntries: entries
        });
    }

    render() {
        // const entries = this.state.todoEntries.length ? <TodoItems items={this.state.todoEntries}/> : null
        return (
            <div>
                <input onChange={(event) => this.onChangeHandler(event)} value={this.state.todoEntry}/>
                <button onClick={() => this.onSubmitHandler()}>Submit</button>
                <TodoItems items={this.state.todoEntries}/>
            </div>
        );
    }
}
