import React from 'react'
import { Link, useParams } from 'react-router-dom'
import sanPhamApi from '../api/sanPhamApi';
import { useEffect, useState } from 'react';
import ProductRelated from './ProductRelated';
import { useForm } from 'react-hook-form'
import gioHangApi from '../api/gioHangApi';
import Comment from '../component/web/Product/Comment';
import commentApi from '../api/commentApi';

const ProductDetail = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [product, setProduct] = useState([]);
    const [comment, setComment] = useState([]);
    const ttsp = {
        username: "",
        tenSP: product.name,
        size: "L",
        mauSac: "black",
        gia: product.price,
        soLuong: 1,
        image: product.image1
    }

    let { id, sp } = useParams();
    useEffect(async () => {
        const getProduct = async () => {
            const { data } = await sanPhamApi.getSPById(id, sp)
            setProduct(data)
        }
        getProduct();
    }, [])

    useEffect(async () => {
        getComment();
    }, [])

    const getComment = async () => {
        const { data } = await commentApi.getCommentByIdSP(id, sp, 1)
        console.log(data);
        setComment(data)
    }

    const va = (number) => {
        return Number(number).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    }

    const setImg = (event) => {
        var img = document.getElementById('img')
        var imgSrc = event.target.src
        event.target.src = img.src
        img.src = imgSrc
    }

    const plus = () => {
        ttsp.soLuong = ttsp.soLuong + 1
        document.getElementById('soLuong').value = ttsp.soLuong

    }

    const mius = () => {
        if (ttsp.soLuong > 1) {
            ttsp.soLuong = ttsp.soLuong - 1
            document.getElementById('soLuong').value = ttsp.soLuong
        }
    }

    const colorSelect = (event) => {
        resetColor()
        ttsp.mauSac = event.target.innerHTML
        event.target.style.border = '1px red solid'
    }

    const sizeSelect = (event) => {
        resetColorSelectSize()
        ttsp.size = event.target.innerHTML
        event.target.style.border = '1px red solid'
    }

    const resetColor = () => {
        document.getElementById('colorChoose_0').style.border = '1px #75757570 solid'
        document.getElementById('colorChoose_1').style.border = '1px #75757570 solid'
    }

    const resetColorSelectSize = () => {
        document.getElementById('sizeChoose_0').style.border = '1px #75757570 solid'
        document.getElementById('sizeChoose_1').style.border = '1px #75757570 solid'
        document.getElementById('sizeChoose_2').style.border = '1px #75757570 solid'
        document.getElementById('sizeChoose_3').style.border = '1px #75757570 solid'
    }

    const submitGioHang = async () => {
        if (localStorage.getItem('username') == null) {
            document.getElementsByClassName('alertBox')[1].style.display = 'unset';
        } else {
            ttsp.username = localStorage.getItem('username');
            await gioHangApi.addGioHang(ttsp);
            props.getSlHang()
            alertBox('unset')
        }
        console.log(ttsp);
    }

    const alertBox = (display) => {
        if (display == 'unset') {
            document.getElementsByClassName('alertBox')[0].style.display = 'unset';
        } else {
            document.getElementsByClassName('alertBox')[0].style.display = 'none';
        }
    }

    const addCmt = async (noidung) => {
        if (localStorage.getItem('username') == null) {
            document.getElementsByClassName('alertBox')[2].style.display = 'unset';
        } else {
            var now = new Date();
            var username = localStorage.getItem('username');
            var timeCmt = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${now.getDate()}-${(now.getMonth() + 1)}-${now.getFullYear()}`
            const newCmt = {
                username: `${username.substring(0,1).toUpperCase()}${username.substring(1,username.length)}`,
                loaiSP: sp,
                idProduct: id,
                noiDung: noidung.noidung,
                ngayThang: timeCmt
            }
            await commentApi.addComment(newCmt)
            getComment()
        }
    }
    return (
        <div>
            <div className="conEach">
                <div className="alertBox" id="alertBox">
                    Thêm giỏ hàng thành công<br />
                    <button onClick={alertBox}> Đóng </button>
                </div>
                <div className="alertBox" id="alertBox">
                    Bạn phải đăng nhập để thêm được vào giỏ hàng!<br />
                    <button><Link to="/login" style={{ color: 'wheat' }}> Đăng nhập </Link></button>
                </div>
                <div className="alertBox" id="alertBox">
                    Bạn phải đăng nhập để có thể bình luận!<br />
                    <button><Link to="/login" style={{ color: 'wheat' }}> Đăng nhập </Link></button>
                </div>
                <div className="textHead" />
                <div className="card_product">
                    <div className="left">
                        <div className="imgTop"><img id="img" src={product.image1} alt /></div>
                        <div className="imgBot" style={{ textAlign: 'center' }}>
                            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                            <img id="img2" src={product.image2} onMouseEnter={setImg} alt />
                            <img id="img3" src={product.image3} onMouseEnter={setImg} alt />
                        </div>
                        <div className="action">
                            <div className="social" />
                            <div className="like" />
                        </div>
                    </div>
                    <div className="right">
                        <div >
                            <input hidden type="text" name="id" defaultValue="A1" />
                            <h2 name="nameProduct">{product.name}</h2> <br /> <br />
                            <div className="price"><span id="price">{va(product.price)}</span> <span>VNĐ</span></div>
                            <div className="color">
                                <div className="rightLeft">Color</div>
                                <label onClick={colorSelect} id="colorChoose_0" name="checkColor" style={{ border: '1px red solid' }}>
                                    black
                                </label>
                                <label
                                    onClick={colorSelect}
                                    id="colorChoose_1"
                                    name="checkColor"
                                >yellow
                                </label>
                            </div>
                            <div className="size">
                                <div className="rightLeft">Size</div>
                                <label style={{ border: '1px red solid' }}
                                    onClick={sizeSelect}
                                    id="sizeChoose_0"
                                    name="checkSize">
                                    L
                                </label>
                                <label
                                    onClick={sizeSelect}
                                    id="sizeChoose_1"
                                    name="checkSize"
                                >M
                                </label>
                                <label
                                    onClick={sizeSelect}
                                    id="sizeChoose_2"
                                    name="checkSize"
                                >
                                    S
                                </label>
                                <label
                                    onClick={sizeSelect}
                                    id="sizeChoose_3"
                                    name="checkSize"
                                >XL
                                </label>
                            </div>
                            <input type="text" hidden name="colorChange" id="colorChange" defaultValue />
                            <input type="text" hidden name="sizeChange" id="sizeChange" defaultValue />
                            <div className="soLuong">
                                <div className="rightLeft">Quantity</div>
                                <div className="number">
                                    <div id="buttonm" onClick={mius}><i className="fa fa-minus" /></div>
                                    <input type="number" min={1} defaultValue={1} id="soLuong" name="soLuong" />
                                    <div id="buttonp" onClick={plus}><i className="fa fa-plus" /></div>
                                </div>
                            </div>
                            <div className="action">
                                <div id="themGioHang" className="custom-btnnn" onClick={submitGioHang}>
                                    <span>Mua ngay đi</span><span>Thêm giỏ hàng</span>
                                </div>
                                {/* <button type="" name="them" id="them" onClick = {submitGioHang}>
                                    <div className="addShopCard">Thêm vào giỏ hàng</div>
                                </button> */}
                                <div type="submit" id="muaaa" className="custom-btnnn">
                                    <span>Mua ngay</span>
                                </div>
                                <div className="out" id="out" style={{ display: 'none', textTransform: 'uppercase', color: 'red', marginLeft: 100, fontWeight: 600 }}> Unable To Buy </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="a">
                    <div className="b">
                        <div className="card_infor" id="card_infor">
                            <div className="mota">
                                <h3>CHI&nbsp;TIẾT&nbsp;SẢN&nbsp;PHẨM</h3><p>Thương&nbsp;hiệu:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No&nbsp;Brand</p><p>Chất&nbsp;liệu:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vật&nbsp;liệu&nbsp;khác</p><p>Tay&nbsp;áo:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tay&nbsp;dài</p><p>Dáng&nbsp;áo:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dáng&nbsp;vừa</p><p>Cổ&nbsp;áo:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cổ&nbsp;sơ&nbsp;mi</p><p>Túi&nbsp;áo:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Không</p><p>Cách&nbsp;giặt:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Giặt&nbsp;máy</p><p>Gửi&nbsp;từ:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quận&nbsp;Gò&nbsp;Vấp,&nbsp;TP.&nbsp;Hồ&nbsp;Chí&nbsp;Minh<br />&nbsp;</p><h3>MÔ&nbsp;TẢ&nbsp;SẢN&nbsp;PHẨM</h3>
                                <p>Làm gì có mô tả đâu</p>
                            </div>
                        </div>
                        <div className="card_cmt" id="card_cmt">
                            <div className="comment">
                                <div className="boxxx">
                                    <h4>Bình luận</h4>
                                    <div className="InputComment">
                                        <div className="userComment">
                                            <img src="https://avatars.githubusercontent.com/u/65590543?s=400&u=37d70704bd532ae67344cd97489cbd0b81d76135&v=4g" alt />
                                            <form onSubmit={handleSubmit(addCmt)}>
                                                <input
                                                    className="commentI"
                                                    placeholder="Nhập bình luận mới...."
                                                    {...register('noidung', { required: true })}
                                                ></input>
                                                <button type="submit" className="btnCmt">Bình luận</button>
                                            </form>
                                        </div>
                                        <br />
                                        <br />
                                    </div>
                                    {comment.map((comment) => (
                                        <Comment comment={comment} />
                                    ))}
                                    <div className="limit" style={{ display: 'flex', marginTop: 10 }}>
                                        <div className="buttonArrow"><a href="eachProduct.php?id=A1&page=0"><i className="fa fa-angle-double-left" /></a></div>
                                        <span className="ptNumber" style={{ backgroundColor: 'red', boxShadow: '0 1px 4px black' }}>1</span>
                                        <a className="buttonArrow" href="eachProduct.php?id=A1&page=2"><i className="fa fa-angle-double-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="left_card_infor" id="relatedPr">
                        <h5>Product Related</h5>
                        <ProductRelated product={product} sp={sp} />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProductDetail

