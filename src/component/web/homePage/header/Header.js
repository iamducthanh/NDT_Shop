import React, { Component } from 'react'
import Menu from './Menu'
import HeaderTop from './HeaderTop'
import MenuPin from './MenuPin'

export default class Header extends Component {
    render() {
        return (
            <div className="head_header" id="head_header" style={{ zIndex: 10000 }}>
                <HeaderTop />
                <div className="line" />
                <Menu {...this.props}/>
                <MenuPin/>
            </div>
        )
    }
}
