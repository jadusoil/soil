import Styled from 'styled-components';

export const Wrapper = Styled.div`
    display: block;
    flex-direction: column;
    width: 100%;
    height: 100%;
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
    background-position:center;
    background-repeat:no-repeat;
`;

export const HeaderTitle = Styled.div`
    display: flex;
    height: 100%;
    flex: 80;
    margin: 27px 0px 0px 15px;
    font-size: 24px;
    color: green;
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
    height: 100%;
    width: 100%;
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

export const GalleryMenu = Styled.div`
    display: flex;
    cursor: pointer;
    color: green;
`;

export const GalleryWrapper = Styled.div`
    display: flex;
    color: green;
    margin-left: 20px;
    flex-direction: column;
`;

export const ImageGalleryWrapper = Styled.div`
    display: flex;
    max-width: 100%;
    height: 220px;
    flex-flow: wrap;
    flex-grow: 4;
`;

export const ImageWrapper = Styled.div`
    display: flex;
    background-repeat: no-repeat;
    margin: 10px 10px 10px 10px;;
    height: 200px;
    width: 200px;
`;

export const HomeImageWrapper = Styled.div`
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    height: 3700px;
    width: 2000px;
`;

export const ContactWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
`;
