import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/index'

const initialState = {
    toDo: [    
        {
        value: 'Walk the Dog',
        completed: false,
        id: 1
        },
        {
        value: 'Do the Dishes',
        completed: false,
        id: 2
        },
        {
        value: 'Wash the Car',
        completed: false,
        id: 3
        }]
}

let idValue = 4


export const reducer = (state = initialState, action) => {
    console.log(action);
    console.log(state)
    switch(action.type) {
        case ADD_TODO:
            return {
                toDo: [
                    ...state.toDo,
                    {
                        value: action.payload,
                        completed: false,
                        id: idValue++
                    }
                ]
            }
        case TOGGLE_TODO:
            console.log(action.payload.id)
            const newArray = state.toDo.map(todo => (todo.id === action.payload.id) ? { ...todo, completed: !todo.completed } : todo)
            console.log(newArray)
            return {
                toDo: newArray
            }
        default:
            return state
    }
}