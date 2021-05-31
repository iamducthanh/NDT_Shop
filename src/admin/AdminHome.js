import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AdminHome extends Component {
    render() {
        return (
            <div>
                {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Quản lý sản phẩm</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <Link to="/admin/products/add" className="btn btn-primary">Thêm sản phẩm</Link>
                        </div>
                    </div>
                </div> */}
                <h2>Sản phẩm</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên</th>
                                <th>Ảnh</th>
                                <th>Giá</th>
                                <th>Tình trạng</th>
                                <th>Số lượng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {this.props.products.map((product) => (
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td><img src={product.image} style={{ with: 20 }, { height: 20 }}></img></td>
                                    <td>{product.price}</td>
                                    <td>{product.status ? 'Còn hàng' : 'Hết hàng'}</td>
                                    <td>{product.quantity}</td>
                                    <th>
                                        <Link to= {`/admin/products/${product.id}`} className="btn btn-danger">Edit</Link>
                                        <button className="btn btn-primary" onClick={this.props.deleteProduct.bind(this, product.id)}>Xóa</button>
                                    </th>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
