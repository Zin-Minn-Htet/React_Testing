import { combineReducers } from "redux";

const getDbPds = () => {
    let getData = localStorage.getItem('product');
    return getData ? JSON.parse(getData) : []
}

const saveDbPds = (products) => {
    localStorage.setItem('product',JSON.stringify(products));
} 

const productReducer = (state=getDbPds(), action) => {
    switch(action.type) {
        case "add" :
            saveDbPds(action.payload);
            state = getDbPds();
            return state;

        case "remove" : 
            state = getDbPds();
            let pds =  state.filter(p => p.id !== action.payload);
            saveDbPds(pds);
            state = getDbPds()
            return state;
        default : 
            return state
    }
}

const reducer = combineReducers({
    porducts : productReducer
})

export default reducer;