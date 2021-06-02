import HomePage from '../component/web/homePage/Content/HomePage/HomePage';
import Footer from '../component/web/homePage/Footer/Footer';
import Header from '../component/web/homePage/header/Header';
// import '../css/aos.css'
// import '../css/bestseller.css'
// import '../css/bottom.css'
// import '../css/keyframe.css'
// import '../css/multicircle.css'
// import '../css/nav-Sticky.css'
// import '../css/respondIndex.css'
// import '../css/responShop.css'
// import '../css/scrollBar.css'
// import '../css/shop.css'
// import '../css/stickyContact.css'
// import '../css/style.css'
import React from 'react'

const WebLayout = (props) => {
    return (
        <div className="container">
            <div className="ScroolTop" id="sct">
                <button style={{ outline: 'none' }}><i className="fa fa-angle-double-up" /></button>
            </div>
            <Header {...props}/>
            {props.children}
            <Footer />

        </div>
    )
}

export default WebLayout