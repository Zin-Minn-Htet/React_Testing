import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width:350px;
    height: 250px;
    background-color:${(props) => props.theme.colors.third};
    h1 {
        color: ${(props)=> props.theme.colors.primary};
        font-size: ${(props) => props.theme.size.h1Size}
    }
    h2 {
        color: ${(po)=> po.theme.colors.secondary};
    }
`

function CompoA () {
    
    return(
        <Container >
            <h1>CompoA Title</h1>
            <h2>CompoA description</h2>
            <a href="#"> GO TO Our Site </a>
        </Container>
    )
}

export default CompoA;