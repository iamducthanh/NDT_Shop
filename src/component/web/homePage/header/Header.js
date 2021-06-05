import Menu from './Menu'
import HeaderTop from './HeaderTop'
import MenuPin from './MenuPin'
import React from 'react'

const Header = (props) => {
    return (
        <div className="head_header" id="head_header" style={{ zIndex: 10000 }}>
            <HeaderTop {...props}/>
            <div className="line" />
            <Menu {...props} />
            <MenuPin />
        </div>
    )
}

export default Header

