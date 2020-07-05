import React from 'react';
import {GalleryWrapper, HomeImageWrapper, ImageGalleryWrapper, ImageWrapper} from "../../styles";
import img1 from "../../../assets/Home.jpg";
import img2 from "../../../assets/img2.jpeg";
import img3 from "../../../assets/img3.jpeg";
import img4 from "../../../assets/img4.jpeg";
import img5 from "../../../assets/img5.jpeg";
import img6 from "../../../assets/img6.jpeg";
import h1H from "../../../assets/h1.png";
import h2H from "../../../assets/h2.png";

function Home() {
    return (
        <GalleryWrapper>
            <h3 style={{width: "1"}}>GREENERY SOIL TESTING LAB</h3>
            <ImageGalleryWrapper>
                <ImageWrapper style={{backgroundImage: `url(${h1H})`}}/>
                <ImageWrapper style={{backgroundImage: `url(${h2H})`}}/>
                <ImageWrapper style={{backgroundImage: `url(${img1})`}}/>
                <ImageWrapper style={{backgroundImage: `url(${img2})`}}/>
                <ImageWrapper style={{backgroundImage: `url(${img3})`}}/>
                <ImageWrapper style={{backgroundImage: `url(${img4})`}}/>
                <ImageWrapper style={{backgroundImage: `url(${img5})`}}/>
                <ImageWrapper style={{backgroundImage: `url(${img6})`}}/>
            </ImageGalleryWrapper>
        </GalleryWrapper>
    )
}

export default Home;
