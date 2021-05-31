import React, { Component } from 'react';
import Box from './Box';
import Circle from './Circle';
import Collection from './Collection';
import Contact from './Contact';
import MultiCircle from './MultiCircle';
import Slider from './Slider';
import Slidew from './Slidew';

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <Contact/>
                <Slider/>
                <Box/>
                <Circle/>
                <Slidew/>
                <MultiCircle/>
                <Collection/>
            </div>
        );
    }
}

export default HomePage;