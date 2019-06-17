const initialState = {
    toDo: [    
        {
        value: 'Walk the Dog',
        completed: false
        },
        {
        value: 'Do the Dishes',
        completed: true
        },
        {
        value: 'Wash the Car',
        completed: false
        }]
}


export const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    value: action.payload,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => (todo.value === action.value) ? { ...todo, completed: !todo.completed } : todo)
        default:
            return state
    }
}