import React, { Children, Component } from 'react';
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

class WebLayout extends Component {
    render() {
        return (
            <div className="container">
                <div className="ScroolTop" id="sct">
                    <button style={{ outline: 'none' }}><i className="fa fa-angle-double-up" /></button>
                </div>
                <Header {...this.props}/>
                {/* Load Facebook SDK for JavaScript */}
                {/* <div id="fb-root" />
                <div className="fb-customerchat" attribution="setup_tool" page_id={108270231303501} theme_color="#fa3c4c" logged_in_greeting="Chào mừng bạn đến với 🐍🐊🐉🐉🐊🐍. Ahihi" logged_out_greeting="Chào mừng bạn đến với 🐍🐊🐉🐉🐊🐍. Ahihi">
                </div> */}
                {this.props.children}
                <Footer />

            </div>
        );
    }
}

export default WebLayout;