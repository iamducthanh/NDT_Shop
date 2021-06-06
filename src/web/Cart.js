import React from 'react'
import gioHangApi from '../api/gioHangApi';
import CartItem from '../component/web/Product/CartItem'
import { useEffect, useState } from 'react';

const Cart = () => {
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
        if(data.length > 0){
            setGioHang(data);
        }
      }
      getGioHang();
      console.log(gioHang);
    }, [])

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
                if(data.length > 0){
                    setGioHang(data);
                }
            } catch (error) {
                alert('Lỗi cmnr')
            }
        }
    }

    const updateCart = async (value, id) => {
        const soLuong = value
        await gioHangApi.updateGioHang(id, value)
    }

    return (
        <main className="page">
            <section className="shopping-cart dark">
                <div className="container">
                    <div className="headerAo">
                        <h1 style={{fontFamily: 'serif'}}>Giỏ hàng</h1>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="items">
                                    {gioHang.map((gioHangItem) => (
                                        <CartItem data = {gioHangItem} removeCart = {removeCart} updateCart = {updateCart}/>
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
                                    <button type="button" className="btn btn-primary btn-lg btn-block">Đặt hàng</button>
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
