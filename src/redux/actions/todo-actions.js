import * as types from './action-types';

export function addTodo(todo){
  return {
        type: types.ADD_TODO,
        todo
    };
}

export function deleteTodo(key){
  return {
        type: types.DELETE_TODO,
        key
    };
}

export function handleCompleted(id){
  return {
        type: types.SET_TODO_IS_COMPLETED,
        id
    };
}