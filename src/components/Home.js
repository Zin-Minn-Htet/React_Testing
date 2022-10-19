import React from 'react';
import Nav from "./Nav";
import hondaImg from "../images/hondaOne.jpg";
import hondaImgTwo from "../images/hondaTwo.jpg";
import hondaImgThree from "../images/hondaThree.webp";
import styled from 'styled-components';
import { Button } from "../styles/shares"

const FlexDiv = styled.div`
display:flex;
background-color:${(props) => props.theme.color.primary};
align-items:center;
padding: 0 20px;
`
const LeftDiv = styled.div`
flex:1;
padding: 20px;
align-items:center;
display: flex;
flex-direction: column;
`
const RightDiv = styled.div`
flex:1;
padding : 20px;
align-items:center;
justify-content: center;

`

export default function Home() {
  return (
    <>
      <Nav />

      <FlexDiv>
        <LeftDiv>
          <h1>Honda NCX Myanmar</h1>
          <h5>Mandalay Warehouse Logistics</h5>
          <Button>Donload Apk</Button>
        </LeftDiv>
        <RightDiv>
          <img src={hondaImg} alt="ads" width="80%" />
        </RightDiv>
      </FlexDiv>

      <FlexDiv>
        <RightDiv>
          <img src={hondaImgTwo} alt="ads" width="80%" />
        </RightDiv>

        <LeftDiv>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat corrupti dignissimos adipisci magni aspernatur et, saepe distinctio fugit velit architecto quod modi omnis deleniti iusto non impedit doloremque voluptates est.distinctio fugit velit architecto quod modi omnis deleniti iusto non</p>
        </LeftDiv>
      </FlexDiv>

      <FlexDiv>
        <LeftDiv>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat corrupti dignissimos adipisci magni aspernatur et, saepe distinctio fugit velit architecto quod modi omnis deleniti iusto non impedit doloremque voluptates est.distinctio fugit velit architecto quod modi omnis deleniti iusto non</p>
        </LeftDiv>

        <RightDiv>
          <img src={hondaImgThree} alt="ads" width="80%" />
        </RightDiv>
      </FlexDiv>

    </>
  )
}
