import React from 'react'
import Hero from '../globals/Hero';
import aboutImg from '../../images/aboutBcg.jpeg'
import Banner from '../globals/Banner';
import { PrimaryButton } from './../globals/Buttons';

const Header = ({ showBannerDetails, setBannerDetails }) => {
    const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni modi beatae eos
    sequi corrupti ratione? Nobis omnis veritatis provident maiores, praesentium,
    sed neque ducimus id in ipsam nihil iure eum?`;

    return (
        <Hero img={aboutImg}>
            <Banner
                greeting='welcome to'
                title='beachwalk resort'
                text={showBannerDetails ? `${text} ${text} ${text}`: text}>

                {!showBannerDetails && <PrimaryButton t='1rem' onClick={setBannerDetails}>show details</PrimaryButton>}

            </Banner>
        </Hero>
    )
}

export default Header
