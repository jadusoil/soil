import Styled from 'styled-components';
import icon from '../assets/soil-icon.svg';

export const Wrapper = Styled.div`
    display: block;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const HeaderWrapper = Styled.div`
    display: flex;
    background-color: grey;
    height: 100px;
`;

export const HeaderIcon = Styled.div`
    display: flex;
    background-image: url(${icon});
    height: 100px;
    flex: 10;
    margin: 33px 0px 0px 0px;
`;

export const HeaderTitle = Styled.div`
    display: flex;
    height: 100%;
    flex: 90;
    margin: 33px 0px 0px 0px;
`;

export const HeaderMenu = Styled.div`
    display: flex;
    background-color: grey;
    height: 100%;
    flex: 50;
    margin: auto;
`;

export const ContentWrapper = Styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: light-pink;
`;
