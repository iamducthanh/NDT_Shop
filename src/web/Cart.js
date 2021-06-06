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
            image: ""
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
                                        <CartItem data = {gioHangItem}/>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="summary">
                                    <h3>Summary</h3>
                                    <div className="summary-item"><span className="text">Subtotal</span><span className="price">$360</span></div>
                                    <div className="summary-item"><span className="text">Discount</span><span className="price">$0</span></div>
                                    <div className="summary-item"><span className="text">Shipping</span><span className="price">$0</span></div>
                                    <div className="summary-item"><span className="text">Total</span><span className="price">$360</span></div>
                                    <button type="button" className="btn btn-primary btn-lg btn-block">Checkout</button>
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
