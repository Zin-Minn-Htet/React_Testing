export const login = (con) => {
    return {
        type: "login",
        payload: con
    }
}

export const logout = (con) => {
    return {
        type: 'logout',
        payload: con
    }
}

const actionCreator = {
    login,
    logout
}

export default actionCreator;