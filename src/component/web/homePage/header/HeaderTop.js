import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderTop extends Component {
    render() {
        return (
            <div className="top-head">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="logo"><img style={{ width: 130 }} src="img/indexx/logo.png" alt />NDTShop</div>
                </Link>
                <div className="icon">
                    <div className="search">
                        <form action="" method="get" className="hihi">
                            <div className="line" id="line">
                                <input type="text" name="searchGlobal" id="searchGlobal" className="searchGlobal" defaultValue />
                                <a className="btS" id="btS"><i className="fa fa-search" aria-hidden="true" /></a>
                                <button type="submit" id="submit" style={{ display: 'none' }} />
                            </div>
                            <span id="btShow"><i className="fa fa-search" aria-hidden="true" /></span>
                        </form>
                    </div>
                    <a href="" className="shopCard"><i className="fa fa-shopping-cart" aria-hidden="true" />
                        <div className="circle">0</div>
                    </a>
                    <ul className="convert">
                        <li className="default">
                            <ul className="listLang1" style={{ marginTop: 3, marginLeft: 20, fontSize: 20 }}>
                                LANGUAGE
                </ul>
                            <ul className="listLang">
                                <li><a href="#googtrans(vi|vi)" className="lang-es selected" data-lang="vi"><img src="png/vietnam.png" alt="Vietnamese" />Vietnamese</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HeaderTop;