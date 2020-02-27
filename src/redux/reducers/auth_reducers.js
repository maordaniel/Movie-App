const initState = {
    isLogged: false,
    username: null,
    userPic: null,
};


const auth_reducers = (state =  initState, action) =>{
    switch (action.type) {
        case "SUCCESS_LOGIN":
            return state = {...state, isLogged: true};
        case "SUCCESS_LOGOUT":
            return state = {...state, isLogged: false, username: null, userPic:null};
        case "SUCCESS_SET_USERNAME":
            return state = {...state, username: action.payload};
        case "SUCCESS_SET_USER_PICTURE":
            return state = {...state, userPic: action.payload};
        default:
            return state;
    }
};

export default auth_reducers;
