import { Link } from 'react-router-dom';

import React from 'react'

const Product = (props) => {
    console.log(props.product);
    return (
        <div>
            <div className="d-flex justify-content-between flex-md-nowrap align-items-center mb-3">
                <h2 className="h2">{props.tenSp}</h2>
                <Link to={`/admin/product/${props.urlP}/add`} className="btn btn-primary">Thêm sản phẩm</Link>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Ảnh</th>
                            <th>Số lượng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.product.map((sanPham, index) => (
                            <tr>
                                <td>{index + 1 + (8 * (Number(props.page) - 1))}</td>
                                <td>{sanPham.name}</td>
                                <td>{Number(sanPham.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                <td>
                                    <img src={sanPham.image1} style={{ with: 50 }, { height: 50 }}></img>
                                    <img src={sanPham.image2} style={{ with: 50 }, { height: 50 }}></img>
                                    <img src={sanPham.image3} style={{ with: 50 }, { height: 50 }}></img>
                                </td>

                                <td>{sanPham.soLuong}</td>
                                <th>
                                    <Link to={`/admin/product/ao-khoac/${sanPham.id}`} className="btn btn-primary">Edit</Link>
                                    <button className="btn btn-danger" onClick={props.onDelete.bind(this, sanPham.id)}>Xóa</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ display: 'flex' }}>
                <button className="ptButton" name="page" onClick={props.locPre}>
                    <i className="fa fa-angle-double-left" />
                </button>
                <div typeof="text" className="ptNumber" style={{ backgroundColor: 'red', borderRadius: 2, boxShadow: '0 1px 4px black' }}>{props.page}</div>
                <button className="ptButton" name="" onClick={props.locNext}><i className="fa fa-angle-double-right" /></button>
            </div>
        </div>
    )
}

export default Product

