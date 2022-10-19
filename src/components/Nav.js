import React from 'react';
import NavImage from '../images/user.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../store/LoginContext';

const FlexDiv = styled.div`
  display:flex;
  background-color:${(props) => props.theme.color.primary};
  height:55px;
  align-items:center;
  padding: 0 20px;
  border-bottom:0.3px solid rgba(0,0,0,0.1)
`
const RightDiv = styled.div`
  flex:1;
  
`
const LeftDiv = styled.div`
  display:flex;
  align-items:center;
`

const UlDiv = styled.ul`
  display:flex;
  justify-content:flex-end;
  `
const H1_Style = {
  marginLeft: "10px",
  color:"indigo"
}

const ATag_Style = {
  color: "hotpink",
}

const LiDiv = styled.li`
padding : 10px;
  &:after{
    content:"";
    display:block;
    height: 3px;
    background-color: hotpink;
    transform: scaleX(0);
    transition: 300ms;
  }
  &:hover{
    &:after{
      transform: scaleX(1)
    }
  }
`

export default function Nav() {

  const navigate = useNavigate();
  const {setLoggedIn} = useLoginContext();
  const LogOut = () => {
    navigate('/');
    setLoggedIn(false)

  }

  return (
    <FlexDiv>
      <LeftDiv>
        <img src={NavImage} width={"50px"} height={"50px"} />
        <strong style={H1_Style} >Hello Zin Min</strong>
      </LeftDiv>
      <RightDiv>
        <UlDiv>
          <LiDiv> <a style={ATag_Style} href='#'>Donload</a> </LiDiv>
          <LiDiv> <a style={ATag_Style} onClick={LogOut} >LogOut</a> </LiDiv>
        </UlDiv>
      </RightDiv>
    </FlexDiv>
  )
}
