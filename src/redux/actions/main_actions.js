export const favoriteMovies = (movie) => dispatch => {
    dispatch({
        type: "SUCCESS_SET_MOVIES",
        payload: movie
    })
};

