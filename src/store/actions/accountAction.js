export const add = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            payload: amount
        })
    }
}

export const remove = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "remove",
            payload: amount
        })
    }
}

export const inset = (user) => {
    return (dispatch) => {
        dispatch({
            type: "inset",
            payload: user
        })
    }
}

export const drop = (user) => {
    return (dispatch) => {
        dispatch({
            type: "delete",
            payload: user
        })
    }
}