import React from 'react'
import DonMuaItemItem from './DonMuaItemItem'

const DonMuaItem = (props) => {
    console.log(props.trangthai)
    const getTongTien = () => {
        var tongTien = 0;
        props.listProduct.map((product) => {
            tongTien += (product.price * product.soluong)
        })
        return tongTien;
    }

    const formatTien = (price) => {
        return Number(price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    }
    return (
        <main className="page">
            <section className="shopping-cart dark">
                <div className="container">
                    <div className="headerAo">
                        <h1 style={{ fontFamily: 'serif' }}>Đơn hàng</h1>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="items">
                                    {props.listProduct.map((product) => (
                                        <DonMuaItemItem product={product} />
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
                                    <div className="summary-item"><span className="text">Hình thức</span><span className="price">{props.thanhToan}</span></div>
                                    <div style={{ marginTop: '10px' }} className="summary-item"><span className="text">Trạng thái</span><span className="price">{props.trangthai == 1 ? 'Đã xác nhận' : 'Chưa xác nhận'}</span></div>
                                    
                                    {props.trangthai == 0 ?
                                        <button type="button" className="btn btn-oranger btn-lg btn-block" style={{ backgroundColor: 'red', color: 'white' }} onClick={props.huyDonHang.bind(this, props.idDonHang)}>Hủy đơn hàng</button>
                                        : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DonMuaItem
