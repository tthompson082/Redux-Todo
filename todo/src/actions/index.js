export const addToDo = todo => {
    console.log(todo);
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}

export const toggleToDo = todo => {
    console.log(todo);
    return {
        type: 'TOGGLE_TODO',
        payload: todo,
    }
}