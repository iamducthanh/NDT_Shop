import React from 'react'
import { Link, useParams } from 'react-router-dom'
import sanPhamApi from '../api/sanPhamApi';
import { useEffect, useState } from 'react';
import ProductRelated from './ProductRelated';
import { useForm } from 'react-hook-form'
import gioHangApi from '../api/gioHangApi';
import Comment from '../component/web/Product/Comment';
import commentApi from '../api/commentApi';
import img from '../css/regift.gif'

const ProductDetail = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState();
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
            console.log(data);
            setProduct(data[0])
        }
        getProduct();
    }, [])

    useEffect(async () => {
        getComment();
    }, [])

    useEffect(async () => {
        const getMaxCmt = async () => {
            const { data } = await commentApi.getAllComment(id, sp)
            setMaxPage(data.length % 8 == 0 ? data.length / 8 : Math.round(data.length / 8 + 1))
        }
        getMaxCmt();
    }, [])

    const getComment = async () => {
        setPage(1)
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
            document.getElementById('alertBox3').style.display = 'unset';
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
            document.getElementById('alertBox2').style.display = 'unset';
        } else {
            document.getElementById('alertBox2').style.display = 'none';
        }
    }

    const addCmt = async (noidung) => {
        if (localStorage.getItem('username') == null) {
            document.getElementById('alertBox4').style.display = 'unset';
        } else {
            var now = new Date();
            var username = localStorage.getItem('username');
            var timeCmt = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${now.getDate()}-${(now.getMonth() + 1)}-${now.getFullYear()}`
            const newCmt = {
                username: `${username.substring(0, 1).toUpperCase()}${username.substring(1, username.length)}`,
                loaiSP: sp,
                idProduct: id,
                noiDung: noidung.noidung,
                ngayThang: timeCmt
            }
            await commentApi.addComment(newCmt)
            getComment()
        }
    }

    const nextCmt = async () => {
        console.log(page);
        console.log(maxPage);
        if (page + 1 > maxPage) {
        } else {
            const { data } = await commentApi.getCommentByIdSP(id, sp, page + 1)
            setComment(data)
        }
        if (page >= maxPage - 1) {
            setPage(maxPage)
        } else {
            setPage(page + 1)
        }

    }
    const preCmt = async () => {
        const { data } = await commentApi.getCommentByIdSP(id, sp, page - 1)
        setComment(data)
        if (page == 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }

    }
    const muaNgay = () => {
        submitGioHang()
        setTimeout(()=>{
            alertBox()
            document.getElementsByClassName('shopCard')[0].click();
        }, 1000)
    }

    return (
        <div>
            <div className="conEach">
                <div className="alertBox" id="alertBox2">
                    Th??m gi??? h??ng th??nh c??ng<br />
                    <button onClick={alertBox}> ????ng </button>
                </div>
                <div className="alertBox" id="alertBox3">
                    B???n ph???i ????ng nh???p ????? th??m ???????c v??o gi??? h??ng!<br />
                    <button><Link to="/login" style={{ color: 'wheat' }}> ????ng nh???p </Link></button>
                </div>
                <div className="alertBox" id="alertBox4">
                    B???n ph???i ????ng nh???p ????? c?? th??? b??nh lu???n!<br />
                    <button><Link to="/login" style={{ color: 'wheat' }}> ????ng nh???p </Link></button>
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
                            <div className="price"><span id="price">{va(product.price)}</span> <span>VN??</span></div>
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
                                    <span>Mua ngay ??i</span><span>Th??m gi??? h??ng</span>
                                </div>
                                {/* <button type="" name="them" id="them" onClick = {submitGioHang}>
                                    <div className="addShopCard">Th??m v??o gi??? h??ng</div>
                                </button> */}
                                <div type="submit" id="muaaa" className="custom-btnnn" onClick={muaNgay}>
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
                                <h3>CHI&nbsp;TI???T&nbsp;S???N&nbsp;PH???M</h3><p>Th????ng&nbsp;hi???u:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No&nbsp;Brand</p><p>Ch???t&nbsp;li???u:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V???t&nbsp;li???u&nbsp;kh??c</p><p>Tay&nbsp;??o:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tay&nbsp;d??i</p><p>D??ng&nbsp;??o:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D??ng&nbsp;v???a</p><p>C???&nbsp;??o:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C???&nbsp;s??&nbsp;mi</p><p>T??i&nbsp;??o:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kh??ng</p><p>C??ch&nbsp;gi???t:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gi???t&nbsp;m??y</p><p>G???i&nbsp;t???:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qu???n&nbsp;G??&nbsp;V???p,&nbsp;TP.&nbsp;H???&nbsp;Ch??&nbsp;Minh<br />&nbsp;</p><h3>M??&nbsp;T???&nbsp;S???N&nbsp;PH???M</h3>
                                <p>L??m g?? c?? m?? t??? ????u</p>
                            </div>
                        </div>
                        <div className="card_cmt" id="card_cmt">
                            <div className="comment">
                                <div className="boxxx">
                                    <h4>B??nh lu???n</h4>
                                    <div className="InputComment">
                                        <div className="userComment">
                                            <img src={img} alt />
                                            <form onSubmit={handleSubmit(addCmt)}>
                                                <input
                                                    className="commentI"
                                                    placeholder="Nh???p b??nh lu???n m???i...."
                                                    {...register('noidung', { required: true })}
                                                ></input>
                                                <button type="submit" className="btnCmt">B??nh lu???n</button>
                                            </form>
                                        </div>
                                        <br />
                                        <br />
                                    </div>
                                    {comment.map((comment) => (
                                        <Comment comment={comment} />
                                    ))}
                                    <div className="limit" style={{ display: 'flex', marginTop: 10 }}>
                                        <button className="buttonArrow" onClick={preCmt}>
                                            <i className="fa fa-angle-double-left" />
                                        </button>
                                        <span className="ptNumber" style={{ backgroundColor: 'red', boxShadow: '0 1px 4px black' }}>{page}</span>
                                        <button className="buttonArrow" onClick={nextCmt}>
                                            <i className="fa fa-angle-double-right" /></button>
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

