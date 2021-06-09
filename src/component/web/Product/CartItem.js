import React from 'react'

const CartItem = (props) => {
    const updateCart = (event) => {
        props.updateCart(event.target.value, props.data.id)
    }

    return (
        <div className="product" style={{ paddingLeft: '20px' }}>
            <div className="itemmm">
            <div className="row">
                <div className="col-md-3">
                    <img className="img-fluid mx-auto d-block image" style={{paddingLeft: '10px'}} src={props.data.image} />
                </div>
                <div className="col-md-8">
                    <div className="info">
                        <div className="row">
                            <div className="col-md-5 product-name">
                                <div className="product-name">
                                    <a href="#">{props.data.tenSP}</a>
                                    <div className="product-info">
                                        <div>Color: <span className="value">{props.data.mauSac}</span></div>
                                        <div>Size: <span className="value">{props.data.size}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 quantity">
                                <label htmlFor="quantity">Quantity:</label>
                                <input control id="soLuongCart" onKeyUp={updateCart} type="number" defaultValue={props.data.soLuong} className="form-control quantity-input" />
                            </div>
                            <div className="col-md-3 price">
                                <span>{Number(props.data.gia).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                            </div>
                        </div>
                        
                    </div>
                    <button id="deleteCart" onClick={props.removeCart.bind(this, props.data.id)}>delete</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CartItem
