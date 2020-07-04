import Styled from 'styled-components';

export const Wrapper = Styled.div`
    display: block;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const HeaderWrapper = Styled.div`
    display: flex;
    height: 100px;
`;

export const HeaderIcon = Styled.div`
    display: flex;
    flex: 10;
    height: 100%;
    width: 100px;
`;

export const HeaderTitle = Styled.div`
    display: flex;
    height: 100%;
    flex: 90;
    margin: 35px 0px 0px 15px;
    font-size: 24px;
`;

export const HeaderMenu = Styled.div`
    display: flex;
    flex: 20;
    margin: 35px 20px 0px 15px;
    justify-content: space-between;
`;

export const ContentWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const MarqueWrapper = Styled.div`
    display: flex;
    margin: 20px 0px 0px 0px;
    justify-content: center;
    color: red;
    height: 100px;
    width: 100%;
`;

export const BodyWrapper = Styled.div`
    display: flex;
    justify-content: center;
    margin: 200px 0px 0px 0px;
`;

export const HomeMenu = Styled.div`
    display: flex;
    cursor: pointer;
    color: green;
`;

export const AboutMenu = Styled.div`
    display: flex;
    cursor: pointer;
    color: green;
`;

export const ContactMenu = Styled.div`
    display: flex;
    cursor: pointer;
    color: green;
`;
