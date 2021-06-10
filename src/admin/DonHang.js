import React from 'react'
import { useEffect, useState } from 'react';
import hoaDonApi from '../api/hoaDonApi';
import Header from '../component/admin/Header';


const DonHang = () => {
    const [donHang, setDonHang] = useState([]);
    useEffect(() => {
        getDonHang();
    }, [])
    const getDonHang = async () => {
        const { data } = await hoaDonApi.getHoaDonByPage(1)
        setDonHang(data);
    }
    const getTongTien = (listProduct) => {
        var tongTien = 0;
        listProduct.map((product) => {
            tongTien += (product.price * product.soluong)
        })
        return tongTien;
    }

    const xacNhanDon = async (donHang) => {
        donHang.trangThai = 1;
        await hoaDonApi.update(donHang.id, donHang)
        getDonHang()
    }

    const locDonHangTheoTrangThai = async (event) => {
        if (event.target.value == 'all') {
            getDonHang()
        } else {
            const { data } = await hoaDonApi.getHoaDonByTrangThai(event.target.value)
            setDonHang(data);
        }
    }

    const onSearch = async (event) => {
        if (event.target.value.length == 0) {
            getDonHang()
        } else {
            const { data } = await hoaDonApi.getHoaDonByUsername(event.target.value)
            setDonHang(data);
        }
    }

    return (
        <div>
            <Header pla={'Tìm theo tên khách hàng...'} onSearch = {onSearch}/>
            <div className="d-flex justify-content-between flex-md-nowrap align-items-center mb-3">
                <h2 className="h2">Danh sách hóa đơn đặt hàng</h2>
                <select className="locHoaDon" onChange={locDonHangTheoTrangThai}>
                    <option value="all">Tất cả</option>
                    <option value="1">Đã xác nhận</option>
                    <option value="0">Chưa xác nhận</option>
                </select>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên khách</th>
                            <th>Sản phẩm</th>
                            <th>Hình thức thanh toán</th>
                            <th>Tổng tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            donHang.map((donHang, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{donHang.username}</td>
                                    <td>
                                        <thead>
                                            <tr>
                                                <th>Tên sản phẩm</th>
                                                <th>Hình</th>
                                                <th>Giá</th>
                                                <th>Số lượng</th>
                                                <th>Size</th>
                                                <th>Màu</th>
                                            </tr>
                                        </thead>
                                        {donHang.product.map((product) => (
                                            <tr style={{ background: 'transparent' }}>
                                                <td>{product.tensp}</td>
                                                <td><img style={{ width: '50px' }} src={product.image}></img></td>
                                                <td>{product.price}</td>
                                                <td>{product.soluong}</td>
                                                <td>{product.size}</td>
                                                <td>{product.color}</td>
                                            </tr>
                                        ))}
                                    </td>
                                    <td>{donHang.thanhToan}</td>
                                    <td>{getTongTien(donHang.product)}</td>
                                    <th>
                                        {donHang.trangThai == 0 ?
                                            <button className="btn btn-danger" onClick={xacNhanDon.bind(this, donHang)}>Xác nhận</button>
                                            :
                                            <p style={{ color: 'green' }}>Đã xác nhận</p>
                                        }
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div style={{ display: 'flex' }}>
                <button className="ptButton" name="page">
                    <i className="fa fa-angle-double-left" />
                </button>
                <div typeof="text" className="ptNumber" style={{ backgroundColor: 'red', borderRadius: 2, boxShadow: '0 1px 4px black' }}>1</div>
                <button className="ptButton" name="" ><i className="fa fa-angle-double-right" /></button>
            </div>
        </div>
    )
}

export default DonHang
