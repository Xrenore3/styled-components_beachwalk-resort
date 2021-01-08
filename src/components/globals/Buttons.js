import styled from 'styled-components';
import { setBorder, setColor, setFont, setLetterSpacing, setRem, setTransition } from './../../styles';

export const PrimaryButton = styled.button`
    background: ${setColor.primaryColor};
    display: inline-block;
    color: ${setColor.mainWhite};
    ${setFont.main};
    font-size: ${setRem(18)};
    padding: ${setRem(17)} ${setRem(36)};
    text-transform: capitalize;
    ${setLetterSpacing(3)};
    ${setBorder({ color: setColor.primaryColor })};
    &:hover{
        background:transparent;
        color: ${setColor.primaryColor}
    };
    text-decoration: none;
    ${setTransition({ time: '2s' })};
    ${props => `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.r || 0}`}
`
export const SmallButton = styled(PrimaryButton)`
    padding: ${setRem(9)} ${setRem(12)};
`