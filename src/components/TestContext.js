import React, {useState, createContext} from 'react';

export const ContextTitle = createContext();

function ContextTitleProvider (props) {

    
    const [title, setTitle] = useState("Testing");

    const changeTitle = () => {
        setTitle("Title"+ Math.ceil(Math.random(0,1) * 1000))
    }

    const dd = {title, changeTitle}

    return(
        <ContextTitle.Provider value={dd}>
            {props.children}
        </ContextTitle.Provider>
    )
}

export default ContextTitleProvider;
