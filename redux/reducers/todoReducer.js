//function reducers
const todoReducer = (state = [{ id: 1, title: 'Learn Redux'}, { id: 2, title: 'Learn RN'}], action) => {
    console.log("TODO REDUCER");
    console.log("TYPE: " + action.type);
    console.log(action.payload);
    switch (action.type) {
        case 'FETCH_TODO':
            return state
            break;
        case 'ADD_TODO':
            return [ ...state, action.payload ];
            break;
        case 'DELETE_TODO': // payload di delete itu hanya id (string)
            return state.filter(todo => {
                if (todo.id !== action.payload.id) {
                    return todo
                }
            })
            break;
        default:
            return state;
            break;
    }
}

export default todoReducer