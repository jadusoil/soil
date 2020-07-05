import React from 'react';
import {
    HeaderWrapper,
    HeaderIcon,
    HeaderTitle,
    HeaderMenu, HomeMenu, AboutMenu, ContactMenu, GalleryMenu
} from '../styles'

import icon from '../../assets/soil.svg';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HeaderWrapper>
                <HeaderIcon style={{backgroundImage: `url(${icon})`}}/>
                <HeaderTitle>
                    Greenery Soil Testing (A complete soil testing laboratory)
                </HeaderTitle>
                <HeaderMenu>
                    <HomeMenu onClick={() => this.props.setPageName('home')}>
                        Home
                    </HomeMenu>
                    <AboutMenu onClick={() => this.props.setPageName('about')}>
                        About us
                    </AboutMenu>
                    <ContactMenu onClick={() => this.props.setPageName('contact')}>
                        Contact us
                    </ContactMenu>
                    <GalleryMenu onClick={() => this.props.setPageName('gallery')}>
                        Images
                    </GalleryMenu>
                </HeaderMenu>
            </HeaderWrapper>
        )
    }

}

export default Header;
