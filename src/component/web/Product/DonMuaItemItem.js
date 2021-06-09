import React from 'react'

const DonMuaItemItem = (props) => {
    const formatTien = (price) => {
        return Number(price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    }
    return (
        <div className="product" style={{ paddingLeft: '20px' }}>
            <div className="itemmm">
                <div className="row">
                    <div className="col-md-3">
                        <img className="img-fluid mx-auto d-block image" style={{ paddingLeft: '10px' }} src="https://salt.tikicdn.com/cache/w444/ts/product/ae/ae/36/b0562271185e81b2be0756ff4b191f42.jpg" />
                    </div>
                    <div className="col-md-8">
                        <div className="info">
                            <div className="row">
                                <div className="col-md-5 product-name">
                                    <div className="product-name">
                                        <a href="#">{props.product.tensp}</a>
                                        <div className="product-info">
                                            <div>Color: <span className="value">{props.product.color}</span></div>
                                            <div>Size: <span className="value">{props.product.size}</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 quantity">
                                    <label htmlFor="quantity">Quantity:</label>
                                    <input control id="soLuongCart" disabled type="number" defaultValue={props.product.soluong} className="form-control quantity-input" />
                                </div>
                                <div className="col-md-3 price">
                                    <span>{formatTien(props.product.price)}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonMuaItemItem
