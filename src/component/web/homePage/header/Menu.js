import { Link, useHistory } from 'react-router-dom'
import React from 'react'
import hoaDonApi from '../../../../api/hoaDonApi';
import loaiSpApi from '../../../../api/loaiSpApi';
import { useEffect, useState } from 'react';


const Menu = (props) => {
    const [loaiSP, setLoaiSP] = useState([]);
    useEffect(() => {
        getLoaiSP();
    }, [])

    const getLoaiSP = async () => {
        const { data } = await loaiSpApi.getAllLoaiSp();
        console.log(data);
        setLoaiSP(data);
    }
    const logOut = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('username')
        localStorage.removeItem('password')
        props.setUserLogin(null, null)
    }
    const openHoaDon = async () => {
        const { data } = await hoaDonApi.getHoaDonByUsername(localStorage.getItem('username'))
        if (data.length == 0) {
            document.getElementById('alertBox1').style.display = 'unset'
        } else {
            document.getElementById('nextHoaDon').click()
        }

    }

    const closeAlert = () => {
        document.getElementById('alertBox1').style.display = 'none'
    }
    return (
        <div className="bot-head">
            <Link to="/don-hang" style={{ display: 'none' }} id="nextHoaDon"></Link>
            <div className="alertBox" id="alertBox1">
                Bạn chưa có bất kì hóa đơn nào<br />
                <button onClick={closeAlert}> Đóng </button>
            </div>
            <div className="menu" id="menu">
                {loaiSP.map((loaisp) => (
                    <div className="ao">
                        <Link className="bmenu" to="#">{loaisp.tenloai}</Link>
                        <div className="sub">
                            <ul>
                                {loaisp.chitietloai.map((chitietloai) => (
                                    <li><Link className="subli" to={`/${chitietloai.url}`}>{chitietloai.tenchitietloai}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                {/* <div className="ao">
                    <Link className="bmenu" to="#">Áo</Link>
                    <div className="sub">
                        <ul>
                            <li><Link style={{ paddingLeft: 40, zIndex: '1000000000' }} className="subli" to="/ao-khoac">Áo khoác</Link></li>
                            <li><Link style={{ paddingLeft: 40 }} className="subli" to="/ao-thun">Áo thun</Link></li>
                            <li><a style={{ width: '100%' }} className="subli" href="#">sweater</a></li>
                            <li><a style={{ width: '100%' }} className="subli" href="">shirt</a></li>
                        </ul>
                    </div>
                </div>
                <div className="ao">
                    <a className="bmenu" href="">Quần</a>
                    <div className="sub">
                        <ul>
                            <li><Link style={{ paddingLeft: 40 }} className="subli" to="/jeans">Jeans</Link></li>
                            <li><a className="subli" href="">pant</a></li>
                            <li><a className="subli" href="">short</a></li>
                        </ul>
                    </div>
                </div>
                <div className="nhan">
                    <a className="bmenu" href="">Trang sức</a>
                    <div className="sub">
                        <ul>
                            <li><a className="subli" href="">Nhẫn</a></li>
                            <li><a className="subli" href="">Vòng</a></li>
                        </ul>
                    </div>
                </div>
                <div className="non">
                    <a className="bmenu" href="">Giày</a>
                    <div className="sub">
                        <ul>
                            <li><a className="subli" href="">Sneaker</a></li>
                            <li><a className="subli" href="">Adidas</a></li>
                            <li><a className="subli" href="">Jordan</a></li>

                        </ul>
                    </div>
                </div>
                <div className="kinh">
                    <a className="bmenu" href="">Flash sale</a>
                    <div className="sub">
                        <ul>
                            <li><a className="subli" href="">Phớ</a></li>
                            <li><a className="subli" href="">Quắm</a></li>
                        </ul>
                    </div>
                </div> */}
                <a className="bmenu" href="https://iamducthanh.tk" target="_blank">about me</a>
                {localStorage.getItem("accessToken") ? <Link className="bmenu" to="/admin/">Admin</Link> : null}
            </div>
            <div className="burger" id="burger">
                <i className="fa fa-bars" id="burgericon" />
            </div>
            <div className="menu" id="account">
                <div className="ao">
                    <a to="/login" className="bmenu"><i className="fa fa-user" style={{ marginRight: 5 }} /><span className="text log">
                        {localStorage.getItem('username') != null ?
                            props.user
                            :
                            'Tài khoản'
                        }
                    </span></a>
                    {localStorage.getItem("username") != null ?
                        <div className="sub">
                            <ul>
                                <li>
                                    <a className="subli" onClick={openHoaDon}>Đơn mua</a>

                                </li>
                                <li>
                                    <a className="subli" onClick={logOut}>Logout</a>
                                </li>
                            </ul>
                        </div>
                        :
                        <div className="sub" id="">
                            <ul>
                                <li>
                                    <Link style={{ textAlign: 'center' }} className="subli" to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu
