import React from 'react'
import styled, { keyframes } from 'styled-components'
import gsap from 'gsap'

const Section = styled.section`
width: 100vw;
height: 100vh;
position: relative;

display: flex;
justify-content: center;
align-items: center;
`
const TextContainer =styled.div`
width: 100vw;
height: 100vh;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: var(--dark);
color: var(--white);
`

const moveUp = keyframes`
100%{
    transform: translateY(0);
}

`

const Text = styled.p`
width: 50%;
font-size: var(--fontlg);
position: relative;
height: var(--fontmd);
overflow: hidden;

span{
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: ${props => props.delay};
    font-family: var(--fontL);
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.author{
    width: 100%;
    text-align: end;
    background-image:linear-gradient(-180deg, var(--gradient));

}
`

const Quote = () => {
  return (
<Section>  
    <TextContainer>
       <Text delay="0s">  <span>&#8220;Focus and simplicity</span> </Text> 
       <Text delay="0.4s">  <span>&nbsp;&nbsp;simple can be harder than complex</span> </Text> 
       <Text delay="0.8s">  <span>&nbsp;&nbsp;you have to work hard to get your thinking clean</span> </Text> 
       <Text delay="1.2s">  <span>&nbsp;&nbsp;to make it simple.&#8221;</span> </Text> 
       <Text delay="1.6s">  <span className='author'>&#x23af;Steve Jobs</span> </Text> 
    </TextContainer>

</Section>
  )
}

export default Quote


