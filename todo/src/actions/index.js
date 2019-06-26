export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELTE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const CLEAR_ALL = 'CLEAR_ALL'

export const addToDo = todo => {
    console.log(todo);
    return {
        type: ADD_TODO,
        payload: todo,
    }
}

export const toggleToDo = todo => {
    console.log(todo);
    return {
        type: TOGGLE_TODO,
        payload: todo,
    }
}

export const deleteToDo = todo => {
    console.log(todo);
    return {
        type: DELETE_TODO,
        payload: todo
    }
}

export const clearAll = () => {
    return {
        type: CLEAR_ALL
    }
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    }
}