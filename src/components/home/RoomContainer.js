import React, { useState } from 'react';
import Section from '../globals/Section';
import Title from '../globals/Title';
import Room from './Room';
import rooms from './rooms-data';
import styled from 'styled-components';
import { media } from '../../styles';
import { setRem } from './../../styles';

const RoomContainer = () => {
    const [state, setState] = useState(rooms);

    return (
        <Section background='#fffff0'>
            <Title title='our rooms' center/>
            <RoomsCenter>
                {state.map(room => {
                    return <Room key={room.id} room={room} />
                })}
            </RoomsCenter>
        </Section>
    )
}

const RoomsCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    ${media.large`
        max-width: 1170px;
        width: 100vw;
    `};
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(360px,1fr));
    /* ${media.tablet`
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: ${setRem(32)};
    `} 
    ${media.large`
        grid-template-columns: repeat(3, 1fr);
    `} */
`

export default RoomContainer
