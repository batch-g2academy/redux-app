const movieReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MOVIE':
            return action.payload
            break;
        case 'REMOVE_MOVIE':
            return state.filter(movie => {
                if (movie._id !== action.payload.id) {
                    return movie;
                }
            })
            break;
        default:
            return state
            break;
    }
}

export default movieReducer;