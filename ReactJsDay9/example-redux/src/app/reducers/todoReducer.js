const initialState = [
    {id : 1, title : "da bong", status : false},
    {id : 2, title : "an toi", status : true},
    {id : 3, title : "ngu", status : false}
]

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case "todo/addTodo" : {
            return [...state, action.payload]
        }
        case "todo/updateTodo" : {
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo, 
                        ...action.payload
                    }
                }
                return todo
            })
        }
        case "todo/removeTodo" : {
            return state.filter(todo => todo.id !== action.payload.id)
        }
        default: {
            return state
        }
    }
}

export default todoReducer;