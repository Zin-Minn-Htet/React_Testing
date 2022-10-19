import React, { useRef } from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import { Button } from "../styles/shares";
import { useLoginContext } from '../store/LoginContext';
import { useNavigate } from 'react-router-dom';

const Cover = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    align-items: center;
`

const LoginDiv = styled.section`
    background-color: #b3c6ff;
    width: 60%;
    margin:auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`
const InputStyle = styled.input`
    width: 50%;
    display: block;
    border:none;
    padding : 10px;
    margin : 10px 0;
    &:focus{
        outline: 2px solid #ddd;
    }
`
const H1_Style = styled.h1`
    color:indigo;
    margin-bottom: 10px;
`

export default function Login() {
    const { setLoggedIn } = useLoginContext();
    const navigate = useNavigate();
    const phoneRef = useRef();
    const passwordRef = useRef();

    const Login = (e) => {
        e.preventDefault();
        let user = {
            phone: phoneRef.current.value,
            password: passwordRef.current.value
        }
        if (passwordRef.current.value && phoneRef.current.value) {
            setLoggedIn(true);
            navigate("/home")
        }
        passwordRef.current.value = "";
        phoneRef.current.value = ""
    }

    return (
        <>
            <form onSubmit={Login}>
                <Cover>
                <LoginDiv>

                    <H1_Style>Login To Home Page</H1_Style>
                    <em>Type any keyword to login</em>
                    <InputStyle type="tel" placeholder="phone" ref={phoneRef} />
                    <InputStyle type="password" placeholder="password" ref={passwordRef} />
                    <Button type='submit'>Login</Button>

                </LoginDiv>
                </Cover>
            </form>
        </>
    )
}
