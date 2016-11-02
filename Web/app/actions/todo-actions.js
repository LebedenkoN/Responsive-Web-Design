import ResourceApi from 'common/resource-client';
import { showActionProgress,
         hideActionProgress,
         showActionError
       } from '../actions/utility-actions';
import { createAction } from 'redux-actions';

export const REQUEST_LOAD_TODOS = 'REQUEST_LOAD_TODOS';
export const SAVE_TODO = 'SAVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const LOAD_TODOS = 'LOAD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const allTodos = createAction('TODO_LIST');
const addTodoSuccess = createAction('ADD_TODO');
const updatTodoSuccess = createAction('EDIT_TODO');
const removeTodoSuccess = createAction('REMOVE_TODO');

export const loadTodos = () => {
    const action = (dispatch, getState) => {
        dispatch(showActionProgress('Table', 'Loading Todos..'));
        const httpClient = ResourceApi.getInstance(getState());
        return httpClient.get('Todo')
            .then((response) => {
                dispatch(allTodos(response.data));
                dispatch(hideActionProgress('Table'));
            }).catch(() => {
                dispatch(showActionError('Table', 'Ooops, could not load todos'));
                dispatch(hideActionProgress('Table'));
            });
    };
    return action;
};

export const addTodo = (todo) => {
    const action = (dispatch, getState) => {
        const httpClient = ResourceApi.getInstance(getState());
        return httpClient.post('Todo', todo)
        .then((response) => {
            dispatch(addTodoSuccess(response.data));
        });
    };
    return action;
};

export const updateTodo = (todo) => {
    const action = (dispatch, getState) => {
        let url = 'Todo/';
        url = url + todo.id;
        const httpClient = ResourceApi.getInstance(getState());
        return httpClient.put(url, todo)
            .then((response) => {
                dispatch(updatTodoSuccess(response.data));
            });
    };
    return action;
};

export const removeTodo = (id) => {
    const action = (dispatch, getState) => {
        let url = 'Todo/';
        url = url + id;
        const httpClient = ResourceApi.getInstance(getState());
        return httpClient.delete(url)
            .then(() => {
                dispatch(removeTodoSuccess(id));
            }).catch(() => {
                dispatch(showActionError('Table', 'Ooops, could not remove todos'));
            });
    };
    return action;
};
