import React from 'react';
import Header from './header'
import Home from './home';
import Register from './register';
import Work from './work';
import Brands from './brands';
import Community from './community';
import Card from './card';
import Events from './events';
import Career from './career';
import Footer from './footer';

function index(props) {
    return (
        <div>
            <Header />
            <Home />
            <Register />
            <Work />
            <Brands/>
            <Community />
            <Card />
            <Events/>
            <Career/>
            <Footer/>
        </div>
    );
}

export default index;