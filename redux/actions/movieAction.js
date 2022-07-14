export const fetchMovies = (payload) => {
    return { type: 'FETCH_MOVIE', payload: payload };
}

export const removeMovie = (payload) => {
    return { type: 'REMOVE_MOVIE', payload: payload }
}

export const getMovie = () => {

    //interupt proses sebelum masuk ke reducer
    //redux-thunk
    return function(dispatch, getState) {
        //proses asynchronus
        fetch(`http://movie-app-g2.herokuapp.com/movies`)
        .then(response => {
            return response.json()
        })
        .then(data =>{
            // dispatch({ type: 'FETCH_MOVIE', payload: data })
            // ATAU 
            dispatch(fetchMovies(data));
        })
        .catch(err => {
            console.log(err);
        })
    }

 }
   