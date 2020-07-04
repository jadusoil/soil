import React from 'react';
import {
    HeaderWrapper,
    HeaderIcon,
    HeaderTitle,
    HeaderMenu, HomeMenu, AboutMenu, ContactMenu
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
                    Soil testing
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
                </HeaderMenu>
            </HeaderWrapper>
        )
    }

}

export default Header;
