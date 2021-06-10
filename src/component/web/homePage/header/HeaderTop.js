import { Link } from 'react-router-dom';
import logo from '../../../img/logo.png'
import React from 'react'
import gioHangApi from '../../../../api/gioHangApi';


const HeaderTop = (props) => {

    const getGioHang = async () => {
        const { data } = await gioHangApi.getAllGioHangByUsername(localStorage.getItem('username'))
        if (data.length > 0) {
            document.getElementById('gioHangIcon').click()
        } else {
            document.getElementById('alertBox6').style.display = 'unset'
        }
    }

    return (
        <div className="top-head">
            <div className="alertBox" id="alertBox6">
                Giỏ hàng của bạn không có sản phẩm nào<br />
                <button onClick = {()=>{document.getElementById('alertBox6').style.display = 'none'}}> Đóng </button>
            </div>
            <a href="http://ndtshop.herokuapp.com/" style={{ textDecoration: 'none' }}>
                <div className="logo"><img style={{ width: 130 }} src={logo} alt />NDTShop</div>
            </a>
            <div className="icon">
                <div className="search">
                    <form action="" method="get" className="hihi">
                        <div className="line" id="line">
                            <input type="text" name="searchGlobal" id="searchGlobal" className="searchGlobal" />
                            <a className="btS" id="btS"><img style={{ width: 25 }} src="https://th.bing.com/th/id/R84c5838c77a1551893053b07a1c6d0c4?rik=waDkySiELkHF0w&pid=ImgRaw" alt /></a>
                            <button type="submit" id="submit" style={{ display: 'none' }} />
                        </div>
                        <span><img id="btShow" style={{ width: 25 }} src="https://th.bing.com/th/id/R84c5838c77a1551893053b07a1c6d0c4?rik=waDkySiELkHF0w&pid=ImgRaw" alt /></span>
                    </form>
                </div>
                <div onClick={getGioHang} className="shopCard"><i className="fa fa-shopping-cart" aria-hidden="true" />
                    <div className="circle">{props.slHang}</div>
                </div>
                <Link to="/cart" id="gioHangIcon" style={{ display: 'none' }}></Link>
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
    )
}

export default HeaderTop
