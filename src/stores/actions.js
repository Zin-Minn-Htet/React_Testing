export const login = (con) => {
    return (dispatch) => {
        dispatch({
            type: "login",
            payload: con
        })
    }
}

export const logout = (con) => {
    return (dispatch) => {
        dispatch({
            type: "logout",
            payload: con
        })
    }
}

const actionCreator = {
    login,
    logout
}

export default actionCreator;