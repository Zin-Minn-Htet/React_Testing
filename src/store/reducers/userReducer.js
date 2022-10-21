const userReducer = (state = [], action) => {
    switch (action.type) {
        case "inset":
            return [action.payload, ...state];
        case "delete":
            return state.map(user => user.name != action.payload.name);
        default:
            return state
    }
}

export default userReducer;