const initState = {
    favoriteMovies:[]
};


const main_reducers = (state =  initState, action) =>{
    switch (action.type) {
        case "SUCCESS_SET_MOVIES":
            return state = {...state, favoriteMovies: action.payload};
        default:
            return state;
    }
};

export default main_reducers;
