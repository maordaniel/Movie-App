export const username = (user) => dispatch => {
    dispatch({
        type: "SUCCESS_SET_USERNAME",
        payload: user
    })
};

export const userPic = (pic) => dispatch =>{
    dispatch({
        type: "SUCCESS_SET_USER_PICTURE",
        payload: pic
    })
};

export const login = () => dispatch => {
    dispatch({
        type: "SUCCESS_LOGIN",
    })
};

export const logout = () => dispatch => {
    dispatch({
        type: "SUCCESS_LOGOUT",
    })
};


