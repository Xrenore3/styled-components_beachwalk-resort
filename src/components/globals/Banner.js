import React from 'react';
import styled, { css, keyframes } from 'styled-components'
import { media, setColor, setLetterSpacing } from '../../styles';
import { setRem, setBorder } from './../../styles';


const fadeIn = (start,point,end) => {
    const animation = keyframes`
    0%{
        opacity:0;
        transform:translateY(${start})
    }
    50%{
        opacity:0.5;
        transform:translateY(${point})
    }
    100%{
        opacity:1;
        transform:translateY(${end})
    }
    `
    return css`animation:${animation} 3s ease-in-out;`


}



const Banner = ({ title, className, greeting, children, text }) => {
    debugger
    return (
        <div className={className}>
            <h1>{greeting} <span>{title}</span></h1>
            <div className="info">
                <p>{text}</p>
                {children}
            </div>
        </div>
    )
}

const BannerWrapper = styled(Banner)`
    background: rgba(0,0,0,0.7);
    padding: ${setRem(60)} ${setRem(32)};
    text-align: center;
    color: ${setColor.mainWhite};
    ${setLetterSpacing(3)};
    h1 {
        text-transform: capitalize;
        font-size: ${setRem(48)};
        color: ${setColor.primaryColor};
        span{
            color: ${setColor.mainWhite}
        }
    }
    p {
        width: 85%;
        margin: 0 auto;
    }
    ${media.tablet`
    width: 70vw;
        p { width: 75%};
        ${setBorder({ width: '6px', color: setColor.primaryColor })}
    `}
    /* animation */
    h1{
        ${fadeIn('100%','-10%','0%')};
    }
    .info{
        ${fadeIn('-100%','10%','0%')};
    }


`

export default BannerWrapper
