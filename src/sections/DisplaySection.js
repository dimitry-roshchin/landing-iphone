import React from 'react'
import { styled } from 'styled-components'



const Section = styled.section`
width: 100vw;
height: 200vh;
position: relative;

display: flex;
justify-content: space-around;
flex-direction: column;

background-color: var(--dark);
color: var(--white);

&>*:nth-child(even){
    align-self: flex-end;
    margin-right: 4rem;
    text-align: right;
}

&>*:nth-child(odd){
    margin-left: 4rem; 
}

`;

const MainTitle = styled.h1`
font-size: var(--fontBig);
font-family: var(--fontL);

background-image: linear-gradient(-45deg, var(--gradient));
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

`;

const TextBlockRight = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
width: 50%;
`

const TextBlockLeft = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 50%;
`

const Title = styled.div`
font-size: var(--fontlg);
margin-bottom: 1rem;
`

const Text = styled.div`
font-size: var(--fontxs);
margin-bottom: 0.5rem;
color: var(--greyLight);
width: 55%;
`

const DisplaySection = () => {
  return (
    <Section>
        <MainTitle>
            Immersive <br /> Display
        </MainTitle>
        <TextBlockRight>
            <Title>Super Retina XDR Display</Title>
            <Text>super retina super retina super retina super retina super retina super retina super retina super retina super retina</Text>
        </TextBlockRight>
        <TextBlockLeft>
            <Title>Bigger is Better</Title>
            <Text>super retina super retina super retina super retina super retina super retina super retina super retina super retina</Text>
        </TextBlockLeft>
    </Section>
  )
}

export default DisplaySection