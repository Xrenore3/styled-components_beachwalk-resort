import React from 'react'
import Hero from '../globals/Hero';
import aboutImg from '../../images/aboutBcg.jpeg'
import BannerWrapper from '../globals/Banner';

const Header = () => {
    return (
        <Hero img={aboutImg}>
            <BannerWrapper
                greeting='welcome to'
                title='beachwalk resort'
                text='Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur  anim id est laborum.Lorem ipsum dolor sit amet, consectetur  anim id est laborum.' />
        </Hero>
    )
}

export default Header
