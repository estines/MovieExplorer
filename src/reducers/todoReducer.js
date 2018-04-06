import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from '../actions'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos =[]
}

let id = 1001

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, [
                ...state, {
                    id: id++,
                    text: action.text,
                    completed: false
                }
            ])
        case REMOVE_TODO:
            return Object.assign({}, state, state.filter(todo => todo.id !== action.id))
        case TOGGLE_TODO:
            return Object.assign({}, state, state.map((todo, index) => {
                index === action.index ? {
                    id: todo.id,
                    text: todo.text,
                    completed: !todo.completed
                } : todo
            }))
        default:
            return state
    }
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todoReducer(state = initialState, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}

export default todoReducer