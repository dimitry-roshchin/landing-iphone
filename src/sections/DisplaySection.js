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

`

const DisplaySection = () => {
  return (
    <Section>
        <MainTitle>
            Immersive Display
        </MainTitle>
    </Section>
  )
}

export default DisplaySection