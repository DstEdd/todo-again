import React, {useState} from 'react';
import TodoForm from './components/todoform.js';
import List from './components/list.js'
import generateKey from './helpers/generateKey.js';
import { connect } from "react-redux";
import { addTodo, deleteTodo, handleCompleted } from "../redux/actions/todo-actions";


const App = (props) => {
    // const [todos, setTodos] = useState([]);

    const addTodo = (todo) =>{
        let pre = todo.substr(0, 2);
        setTodos([...todos, {todo: todo, id: generateKey(pre), isCompleted: false}]);
    }

    // const deleteTodo = (key) =>{
    //     let newTodos = todos.filter(todo => todo.id != key);
    //     setTodos(newTodos);
    // }

    // const handleCompleted = (id) =>{
    //     let newTodos = todos.map((todo) => {
    //         if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted}
    //         return todo;
    //       })
    //     setTodos(newTodos);
    // }
    
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