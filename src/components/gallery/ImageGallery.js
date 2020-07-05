import React from 'react';
import {GalleryWrapper, ImageGalleryWrapper, ImageWrapper} from "../../styles";
import img1 from '../../../assets/img1.jpeg';
import img2 from '../../../assets/img2.jpeg';
import img3 from '../../../assets/img3.jpeg';
import img4 from '../../../assets/img4.jpeg';
import img5 from '../../../assets/img5.jpeg';
import img6 from '../../../assets/img6.jpeg';
import limg1 from '../../../assets/limg1.jpeg';
import limg2 from '../../../assets/limg2.jpeg';
import limg3 from '../../../assets/limg3.jpeg';
import limg4 from '../../../assets/limg4.jpeg';
import limg5 from '../../../assets/limg5.jpeg';


function ImageGallery() {
    return (
        <GalleryWrapper>
            <h3 style={{width:"1"}}>Lab Image {"\n"}</h3>
            <ImageGalleryWrapper>
                <ImageWrapper style={{backgroundImage: `url(${limg1})`}}/>
                <ImageWrapper style={{backgroundImage: `url(${limg2})`}}/>
                <ImageWrapper style={{backgroundImage: `url(${limg3})`}}/>
                <ImageWrapper style={{backgroundImage: `url(${limg4})`}}/>
                <ImageWrapper style={{backgroundImage: `url(${limg5})`}}/>
            </ImageGalleryWrapper>
            <h3 style={{width:"1"}}>Crop Image</h3>
            <ImageGalleryWrapper>
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

export default ImageGallery;
