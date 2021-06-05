import React from 'react'

const CartItem = () => {
    return (
        <div className="product" style={{ paddingLeft: '20px' }}>
            <div className="row">
                <div className="col-md-3">
                    <img className="img-fluid mx-auto d-block image" src="https://salt.tikicdn.com/cache/w444/ts/product/ae/ae/36/b0562271185e81b2be0756ff4b191f42.jpg" />
                </div>
                <div className="col-md-8">
                    <div className="info">
                        <div className="row">
                            <div className="col-md-5 product-name">
                                <div className="product-name">
                                    <a href="#">Lorem Ipsum dolor</a>
                                    <div className="product-info">
                                        <div>Color: <span className="value">Đen</span></div>
                                        <div>Size: <span className="value">XL</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 quantity">
                                <label htmlFor="quantity">Quantity:</label>
                                <input id="" type="number" defaultValue={1} className="form-control quantity-input" />
                            </div>
                            <div className="col-md-3 price">
                                <span>$120</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
