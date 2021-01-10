import React from 'react';
import { SmallButton } from '../globals/Buttons';
import styled from 'styled-components';
import { setRem, setColor, setLetterSpacing, setBorder, setTransition, setShadow } from './../../styles';


const Room = ({ className, room }) => {
    const { img = '', title = '', info = '', price = 0 } = room;

    return (
        <article className={className}>
            <div className="img-container">
                <img src={img} alt='single room' />
                <div className="price">${price}</div>
            </div>
            <div className="room-info">
                <h4>{title}</h4>
                <p>{info}</p>
                <SmallButton>View</SmallButton>

            </div>
        </article>
    )
}

export default styled(Room)`
    background: ${setColor.mainWhite};
    margin: ${setRem(32)};
    .img-container{
        background: ${setColor.mainBlack};
        position: relative;
        img {
            width:100%;
            display: block;
            ${setTransition()};
            &:hover {
            opacity: 0.5;
        }
        }    
        .price {
            position: absolute;
            top:50%;
            left:50%;
            transform: translate(-50%, -50%);
            ${setLetterSpacing(5)};
            color: ${setColor.mainWhite};
            padding: ${setRem(10)} ${setRem(33)};
            font-size: ${setRem(22)};
            ${setBorder({ color: setColor.mainWhite })};
            opacity: 0;
            ${setTransition()}
            
        }
        &:hover .price {
            opacity:1;
        }
    }
    .room-info {
        padding: ${setRem()};
        h4 {
            ${setLetterSpacing()};
            text-transform: capitalize;       
        }
        p {
            ${setLetterSpacing()}
        }
    }
    ${setShadow.light};
    ${setTransition()}
    &:hover {
        ${setShadow.dark}
    }

`
