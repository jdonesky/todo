import React, {Component} from 'react';

import './App.css';
import { Layout } from './hoc/Layout/Layout.js'
import Todo from './containers/Todo/Todo.js'

export default class App extends Component {
    render() {

        return (
           <Layout>
               <Todo />
           </Layout>
        );
    }
}
