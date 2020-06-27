import React from 'react';
import Home from "./Home";
import Header from "./Header";
import {
    Wrapper
} from '../styles'

function AppWrapper() {
    return (
        <Wrapper>
            <Header/>
            <Home/>
        </Wrapper>
    )
}

export default AppWrapper;
