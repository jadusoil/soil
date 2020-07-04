import React from 'react';
import Header from "./Header";
import {
    BodyWrapper,
    ContentWrapper, MarqueWrapper,
    Wrapper
} from '../styles'

import Home from "./home/Home";
import AboutUs from "./about/AboutUs";
import ContactUs from "./contact/ContactUs";

class AppWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageName: 'home'
        };

        this.setPageName = this.setPageName.bind(this);
    }

    setPageName(pageName) {
        this.setState({pageName: pageName})
    };

    render() {
        return (<Wrapper>
            <Header setPageName={this.setPageName}/>
            <ContentWrapper>
                <MarqueWrapper>
                    <marquee width="50%">
                        <h3>Test soil to grow most suited crop.</h3>
                    </marquee>
                </MarqueWrapper>
                <BodyWrapper>
                    <div>
                        {
                            this.state.pageName === 'home' && <Home/>
                        }
                        {
                            this.state.pageName === 'about' && <AboutUs/>
                        }
                        {
                            this.state.pageName === 'contact' && <ContactUs/>
                        }

                    </div>
                </BodyWrapper>
            </ContentWrapper>
        </Wrapper>)
    }
}

export default AppWrapper;
