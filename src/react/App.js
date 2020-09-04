import React, {useState} from 'react';
import TodoForm from './components/todoform.js';
import List from './components/list.js'
import { connect } from "react-redux";
import { addTodo, deleteTodo, handleCompleted } from "../redux/actions/todo-actions";


const App = (props) => {
        return(
            <div className="main-container">
                    <TodoForm addTodo={props.addTodo}/>
                    <List todos={props.todos} deleteTodo={props.deleteTodo} handleCompleted={props.handleCompleted} />
            </div> 
        )
    }

export default connect(
    state => ({
        todos: state.todos
    }),
    dispatch => ({
        addTodo: (todo) => dispatch(addTodo(todo)),
        deleteTodo: (key) => dispatch(deleteTodo(key)),
        handleCompleted: (id) => dispatch(handleCompleted(id))
    })
)(App);