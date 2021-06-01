import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div className="bot-head">
                <div className="menu" id="menu">
                    <div className="ao">
                        <Link className="bmenu" to="#">Áo</Link>
                        <div className="sub">
                            <ul>
                                <li><Link style={{ paddingLeft: 40}} className="subli" to="/product/ao-khoac">Áo khoác</Link></li>
                                <li><a style={{ width: '100%' }} className="subli" href="">tee</a></li>
                                <li><a style={{ width: '100%' }} className="subli" href="#">sweater</a></li>
                                <li><a style={{ width: '100%' }} className="subli" href="">shirt</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="quan">
                        <a className="bmenu" href="">bottom - jeans,.</a>
                        <div className="sub">
                            <ul>
                                <li><a className="subli" href="">jeans</a></li>
                                <li><a className="subli" href="">pant</a></li>
                                <li><a className="subli" href="">short</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="nhan">
                        <a className="bmenu" href="">jewelry - metal</a>
                        <div className="sub">
                            <ul>
                                <li><a className="subli" href="">ring</a></li>
                                <li><a className="subli" href="">bracelet</a></li>
                                <li><a className="subli" href="">necklace</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="non">
                        <a className="bmenu" href="">hat</a>
                        <div className="sub">
                            <ul>
                                <li><a className="subli" href="">camouflage</a></li>
                                <li><a className="subli" href="">cap</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="kinh">
                        <a className="bmenu" href="">glasses - eyes</a>
                        <div className="sub">
                            <ul>
                                <li><a className="subli" href="">Hello</a></li>
                                <li><a className="subli" href="">sun</a></li>
                            </ul>
                        </div>
                    </div>
                    <a className="bmenu" href="https://iamducthanh.tk" target="_blank">about me</a>
                    {localStorage.getItem("accessToken") ? <Link className="bmenu" to="/admin/">Admin</Link> : null}
                </div>
                <div className="burger" id="burger">
                    <i className="fa fa-bars" id="burgericon" />
                </div>
                <div className="account" id="account">
                    <Link to="/login"><i className="fa fa-user" /><span className="text log">Tài khoản</span></Link>
                </div>
            </div>
        );
    }
}

export default Menu;