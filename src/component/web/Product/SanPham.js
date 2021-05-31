import React, { Component } from 'react';

class SanPham extends Component {
    render() {
        return (
            <div className="card">
                <a href="">
                    <div className="img">
                        <img id="A1" src="https://bizweb.dktcdn.net/thumb/1024x1024/100/345/647/products/f2b86876a95a54040d4b.jpg?v=1592298202893" alt />
                    </div>
                </a>
                <div className="action">
                    <div className="add">
                        <i className="fa fa-shopping-cart" />
                    </div>
                </div>
                <div className="type">
                    <img src="img/img_ao/0432A001-0.jpg" alt />
                    <img src="img/img_ao/1620A001-1.jpg" alt />
                    <img src="img/img_ao/2834a001-2.jpg" alt />
                    <img src="img/img_ao/3136a001-3.jpg" alt />
                </div>
                <div className="text"><span className="dcs" name="dsc">Có áo nào đâu</span>
                    <p name="id">A1</p>
                    <div className="star">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </div>
                    <div className="price">
                        <span name="price">200,000 - 350,000</span> VND
                </div>
                    <div className="buy">
                        <a href="" name="buy">Mua ngay</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SanPham;