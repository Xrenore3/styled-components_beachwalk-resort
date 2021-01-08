import React from 'react'
import Hero from '../globals/Hero';
import aboutImg from '../../images/aboutBcg.jpeg'
import Banner from '../globals/Banner';
import { PrimaryButton } from './../globals/Buttons';

const Header = () => {
    return (
        <Hero img={aboutImg}>
            <Banner
                greeting ='welcome to'
                title ='beachwalk resort'
                text ='Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
                    consecteturLorem ipsum dolor sit amet, consectetur  anim id est laborum.Lo
                    rem ipsum dolor sit amet, consectetur  anim id est laborum.'>
                <PrimaryButton t='1rem'>show details</PrimaryButton>
            </Banner>
        </Hero>
    )
}

export default Header
