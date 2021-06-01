import React, { Component } from 'react';

class SanPham extends Component {
    render() {
        return (
            <div className="card">
                <a href="">
                    <div className="img">
                        <img id="A1" src={this.props.data.image1} alt />
                    </div>
                </a>
                <div className="action">
                    <div className="add">
                        <i className="fa fa-shopping-cart" />
                    </div>
                </div>
                <div className="type">
                    <img src={this.props.data.image2} alt />
                    <img src={this.props.data.image3} alt />
                </div>
                <div className="text"><span className="dcs" name="dsc">{this.props.data.name}</span>
                    <p name="id">A1</p>
                    <div className="star">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </div>
                    <div className="price">
                        <span name="price">{this.props.data.priceMin} - {this.props.data.priceMax}</span> VND
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