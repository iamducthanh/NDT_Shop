import React, { Component } from 'react';
import HomePage from '../component/web/homePage/Content/HomePage/HomePage';

class TrangChu extends Component {
    render() {
        return (
            <HomePage {...this.props}/>
        );
    }
}

export default TrangChu;