import React from 'react'
import gioHangApi from '../api/gioHangApi';
import CartItem from '../component/web/Product/CartItem'
import { useEffect, useState } from 'react';
import hoaDonApi from '../api/hoaDonApi';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const [gioHang, setGioHang] = useState([
        {
            id: "",
            username: "",
            tenSP: "",
            size: "",
            mauSac: "",
            gia: 0,
            soLuong: null,
            image: "http://tgo.vn/wp-content/uploads/2021/01/white-background-2.jpg"
        }
    ]);
    useEffect(() => {
        const getGioHang = async () => {
            const { data } = await gioHangApi.getAllGioHangByUsername(localStorage.getItem('username'))
            if (data.length > 0) {
                setGioHang(data);
            }
        }
        getGioHang();
        console.log(gioHang);
    }, [])

    const loadGioHang = async () => {
        const { data } = await gioHangApi.getAllGioHangByUsername(localStorage.getItem('username'))
        if (data.length > 0) {
            setGioHang(data);
        }
    }

    const formatTien = (price) => {
        return Number(price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    }

    const getTongTien = () => {
        var tongTien = 0;
        gioHang.map((gioHangItem) => {
            tongTien += (gioHangItem.gia * gioHangItem.soLuong)
        })
        return tongTien;
    }

    const removeCart = async (id) => {
        if (window.confirm('Bạn có chắc muốn xóa không?')) {
            try {
                let res = await gioHangApi.removeGioHang(id)
                const { data } = await gioHangApi.getAllGioHangByUsername(localStorage.getItem('username'))
                if (data.length > 0) {
                    setGioHang(data)
                    loadGioHang()
                } else {
                    const dataG = [{
                        id: "",
                        username: "",
                        tenSP: "",
                        size: "",
                        mauSac: "",
                        gia: 0,
                        soLuong: null,
                        image: "http://tgo.vn/wp-content/uploads/2021/01/white-background-2.jpg"
                    }]
                    setGioHang(dataG)
                }
                props.getSlHang()
            } catch (error) {
                console.log(error);
                alert('Lỗi cmnr')
            }
        }
    }

    const updateCart = async (value, id) => {
        const soLuongNew = value
        const { data } = await gioHangApi.getGioHangById(id)
        data.soLuong = soLuongNew
        console.log(data);
        await gioHangApi.updateGioHang(id, data)
        loadGioHang()
    }

    const removeDonHang = () => {

    }

    const addHoaDon = async () => {
        var now = new Date();
        var time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${now.getDate()}-${(now.getMonth() + 1)}-${now.getFullYear()}`

        const product = [];
        gioHang.map((giohang) => {
            product.push({
                idsp: giohang.id,
                tensp: giohang.tenSP,
                image: giohang.image,
                price: giohang.gia,
                soluong: giohang.soLuong,
                size: giohang.size,
                color: giohang.mauSac
            })
        })

        const data = {
            username: gioHang[0].username,
            product: product,
            thoigian: time,
            trangThai: "0"
        }
        await hoaDonApi.addHoaDon(data)
        removeFullCart()
        loadGioHang()
        document.getElementById('alertBox').style.display = 'unset'
        setTimeout(() => {
            document.getElementById('alertBox').style.display = 'none'
            document.getElementById('nextHoaDon').click()
        }, 1000)

    }

    const removeFullCart = () => {
        gioHang.map((cart) => {
            gioHangApi.removeGioHang(cart.id)
        })
    }

    return (
        <main className="page">
            <Link to="/don-hang" style={{ display: 'none' }} id="nextHoaDon"></Link>
            <div className="alertBox" id="alertBox">
                Đặt hàng thành công<br />
                <button> Đóng </button>
            </div>
            <section className="shopping-cart dark">
                <div className="container">
                    <div className="headerAo">
                        <h1 style={{ fontFamily: 'serif' }}>Giỏ hàng</h1>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="items">
                                    {gioHang.map((gioHangItem) => (
                                        <CartItem data={gioHangItem} removeCart={removeCart} updateCart={updateCart} />
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="summary">
                                    <h3>Thanh toán</h3>
                                    <div className="summary-item"><span className="text">Tổng tiền hàng</span><span className="price">{formatTien(getTongTien())}</span></div>
                                    <div className="summary-item"><span className="text">Phí vận chuyển</span><span className="price">{formatTien(0)}</span></div>
                                    <div className="summary-item"><span className="text">Giảm giá</span><span className="price">{formatTien(0)}</span></div>
                                    <div className="summary-item"><span className="text">Tổng thanh toán</span><span className="price">{formatTien(getTongTien())}</span></div>
                                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={addHoaDon}>Đặt hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    )
}

export default Cart
