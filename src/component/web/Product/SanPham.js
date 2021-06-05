// import React, { Component } from 'react';
import { useState } from 'react';

import React from 'react'
import { Link } from 'react-router-dom';

const SanPham = (props) => {
    const [img, setImg] = useState([props.data.image1, props.data.image2, props.data.image3]);
    const onRepalace = (index1, index2 , imgS) => {
        const softImg = [];
        softImg.push(imgS)
        softImg.push(img[index1])
        softImg.push(img[index2])
        setImg(softImg)
    }

    const resetImg = () => {
        setImg([props.data.image1, props.data.image2, props.data.image3])
    }
    return (
        <div className="card">
            <div className="img" id="imgoo">
                <Link to={`/${props.sp}/${props.data.id}`}>
                    <img id="imgTo" src={img[0]} alt />
                </Link>
            </div>
            <div className="action">
                <div className="add" >
                    <Link to={`/${props.sp}/${props.data.id}`}>
                    <i className="fa fa-shopping-cart" />
                    </Link>
                </div>
            </div>
            <div className="type">
                <img id="imgNho1" src={img[1]} onMouseEnter = {onRepalace.bind(this, 0, 2, props.data.image2)} onMouseLeave = {resetImg}  alt />
                <img id="imgNho2" src={img[2]} onMouseEnter = {onRepalace.bind(this, 1, 0, props.data.image3)} onMouseLeave = {resetImg} alt />
            </div>
            <div className="text"><span className="dcs" name="dsc">{props.data.name}</span>
                <p name="id">S, M, L, XL, XXL</p>
                <div className="star">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                </div>
                <div className="price">
                    <span name="price">{Number(props.data.price).toLocaleString('vi-VN', {style: 'currency',currency: 'VND'})}</span> VND
                </div>
                <div className="buy">
                    <Link to={`/${props.sp}/${props.data.id}`} name="buy">Mua ngay</Link>
                </div>
            </div>
        </div>
    )
    
}

export default SanPham


// class SanPham extends Component {

//     render() {
//         return (
//             <div className="card">
//                 <div className="img" id="imgoo">
//                     <img id="imgTo" src={this.props.data.image1} alt />
//                 </div>
//                 <div className="action">
//                     <div className="add">
//                         <i className="fa fa-shopping-cart" />
//                     </div>
//                 </div>
//                 <div className="type">
//                     <img id="imgNho1" src={this.props.data.image2} alt />
//                     <img id="imgNho2" src={this.props.data.image3} alt />
//                 </div>
//                 <div className="text"><span className="dcs" name="dsc">{this.props.data.name}</span>
//                     <p name="id">A1</p>
//                     <div className="star">
//                         <i className="fa fa-star" />
//                         <i className="fa fa-star" />
//                         <i className="fa fa-star" />
//                         <i className="fa fa-star" />
//                         <i className="fa fa-star" />
//                     </div>
//                     <div className="price">
//                         <span name="price">{this.props.data.price}</span> VND
//                 </div>
//                     <div className="buy">
//                         <a href="" name="buy">Mua ngay</a>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }




// export default SanPham;

