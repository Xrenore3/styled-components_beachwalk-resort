import React from 'react'
import styled from 'styled-components'
import Section from '../globals/Section'
import Title from '../globals/Title'
import aboutImg from '../../images/aboutBcg.jpeg'
import { PrimaryButton } from '../globals/Buttons'
import { media, setBorder, setColor, setLetterSpacing, setRem } from './../../styles';

const About = ({ setAboutDetails, showAboutDetails }) => {
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni modi beatae eos
  sequi corrupti ratione? Nobis omnis veritatis provident maiores, praesentium,
  sed neque ducimus id in ipsam nihil iure eum?`
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about us" />
        </div>
        <div className="about-info">
          <Title title='about us' ></Title>
          <p> {text}
            {showAboutDetails && text}
          </p>
          {!showAboutDetails && <PrimaryButton onClick={setAboutDetails}>read more</PrimaryButton>}
        </div>

      </AboutCenter>
    </Section>
  )
}
const AboutCenter = styled.div`
.about-info, .about-img {
  padding: ${setRem(30)}
}
.about-img {
  img {
    width: 100%;
    display: block;
    ${setBorder({ width: setRem(6), color: setColor.primaryColor })}

  }
}
.about-info {
  p{  
    ${setLetterSpacing(3)}
  }
}
width: 90vw;
margin: 0 auto;
${media.large`
.about-info, .about-img {
  align-self: center;
  padding: ${setRem(0)}
}
  width: 100vw;
  max-width: 1170px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${setRem(32)};
  .about-info {
    p{
      width:80%;
    }
  }

`}

`

export default About
