import styled from "styled-components";

export const Container =styled.div` 
    max-width:1024px;
    margin: 0 auto;

`
export const Button = styled.button`
border:none;
background-color:hotpink;
padding: 5px 8px;
border-radius: 3px;
color: white;
margin-top:20px;
transition: 300ms;

&:hover {
  background-color: indigo;
}
`