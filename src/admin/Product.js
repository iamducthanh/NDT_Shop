import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-between flex-md-nowrap align-items-center mb-3">
                    <h2 className="h2">Quản lý sản phẩm</h2>
                    <Link to={`/admin/product/${this.props.urlP}/add`} className="btn btn-primary">Thêm sản phẩm</Link>
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
                            {this.props.product.map((sanPham, index) => (
                                <tr>
                                    <td>{index + 1 + (8 * (this.props.page - 1))}</td>
                                    <td>{sanPham.name}</td>
                                    <td>{sanPham.price}</td>
                                    <td>
                                        <img src={sanPham.image1} style={{ with: 50 }, { height: 50 }}></img>
                                        <img src={sanPham.image2} style={{ with: 50 }, { height: 50 }}></img>
                                        <img src={sanPham.image3} style={{ with: 50 }, { height: 50 }}></img>
                                    </td>

                                    <td>{sanPham.soLuong}</td>
                                    <th>
                                        <Link to={`/admin/product/ao-khoac/${sanPham.id}`} className="btn btn-primary">Edit</Link>
                                        <button className="btn btn-danger" onClick = {this.props.onDelete.bind(this, sanPham.id)}>Xóa</button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div style={{ display: 'flex' }}>
                    <button className="ptButton" name="page" onClick={this.props.prePage}>
                        <i className="fa fa-angle-double-left" />
                    </button>
                    <div typeof="text" className="ptNumber" style={{ backgroundColor: 'red', borderRadius: 2, boxShadow: '0 1px 4px black' }}>{this.props.page}</div>
                    <button className="ptButton" name="" onClick={this.props.nextPage}><i className="fa fa-angle-double-right" /></button>
                </div>
            </div>
        )
    }
}
