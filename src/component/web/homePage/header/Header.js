import Menu from './Menu'
import HeaderTop from './HeaderTop'
import MenuPin from './MenuPin'

import { useEffect, useState } from 'react';


import React from 'react'

const Header = (props) => {
    return (
        <div className="head_header" id="head_header" style={{ zIndex: 10000 }}>
            <HeaderTop />
            <div className="line" />
            <Menu {...props} />
            <MenuPin />
        </div>
    )
}

export default Header

