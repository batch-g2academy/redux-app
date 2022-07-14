export const addTodo = (payload) => {
    return { 'type': 'ADD_TODO', 'payload': payload }
}

export const deleteTodo = (payload) => {
    return { type: 'DELETE_TODO', payload: payload}
}
