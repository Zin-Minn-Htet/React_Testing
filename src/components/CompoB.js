import React from "react";
import styled from "styled-components";

const Boo = styled.button`
    background-color: blue;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 3px 8px;
    &:hover{
        background-color: green;
    }
`

function CompoB () {
    return(
        <Boo>
            Click
        </Boo>
    )
}

export default CompoB;