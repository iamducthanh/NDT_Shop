import React, { Component } from 'react';
import logo from '../../../img/logo.png'


class Footer extends Component {
    render() {
        return (
            <div className="bot" id="bottom">
                <div className="scrolltop"> <i className="fa fa-angle-double-up"> </i></div>
                <div className="mainbox">
                    <div className="box-inmainbox">
                        <div className="left-box">
                            <div className="leftHead"><img src={logo} alt />NDT Shop</div>
                            <div className="contentLeft">
                                <h2>MUA HÀNG TRỰC TUYẾN</h2><br />
                                <p style={{ color: 'rgb(241, 194, 133)' }}>0944485574</p><br />
                                <h3>Đảm bảo chất lượng</h3>
                                <br /><br />
                            </div>
                        </div>
                        <div className="right-box" id="mid">
                            <div className="contentRight">
                                <h2>HOTLINE GÓP Ý</h2> <br />
                                <p style={{ color: 'rgb(241, 194, 133)' }}>0944485574</p><br /><br /><br />
                            </div>
                        </div>
                        <div className="mid-box">
                            <div className="contentMid">
                                <h2>ĐỊA CHỈ</h2> <br />
                                <i className="fa fa-building" />: Ốc đảo guộc, Lý Nhân, Hà Nam 
                                <p> <i className="fa fa-phone" /> Hotline: 0944485574</p>
                                <span className="strong" style={{ fontWeight: 600, color: 'rgb(241, 194, 133)' }}>[ Open at: </span>8:30 am
          <span className="strong" style={{ fontWeight: 600, color: 'rgb(241, 194, 133)' }}>Close at: </span>10:30 pm ]<br />
                                <span style={{ color: 'rgb(241, 194, 133)' }}>EVERY DAY _ WELCOME</span>
                            </div>
                        </div>
                    </div>
                    <div className="socail-media">
                        <a href="https://www.facebook.com/iamducthanh/" className="med"> <i className="fa fa-facebook-square" /> </a>
                        <a href="https://www.instagram.com/" className="med"> <i className="fa fa-instagram" /> </a>
                        <a href="https://github.com/iamducthanh" className="med"> <i className="fa fa-github" /> </a>
                        <a href className="med"> <i className="fa fa-google" /> </a>
                        <a href className="med"> <i className="fa fa-youtube" /> </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;