import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuPin extends Component {
    render() {
        return (
            <div className="backgr" id="backgr">
            <div className="bot-head-sticky">
                <div className="menu-sticky">
                    <a href="" className="ao">Áo</a>
                    <a href="" className="quan">Quần</a>
                    <a href="" className="nhan">Trang sức</a>
                    <a href="" className="non">Giày</a>
                    <a href="" className="kinh">Gia dụng</a>
                    <a href="https://iamducthanh.tk" target="_blank" className="about">about me</a>
                    {localStorage.getItem("accessToken") ? <Link className="bmenu" to="/admin/">Admin</Link> : null}
                </div>
                <div className="account-sticky">
                    <Link to="/login"><i className="fa fa-user" /><span className="text log">Tài Khoản</span></Link>
                </div>
            </div>
        </div>
        );
    }
}

export default MenuPin;