import React from 'react'
import { useParams } from 'react-router-dom'
import sanPhamApi from '../api/sanPhamApi';
import { useEffect, useState } from 'react';


const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const [productDetail, setProductDetail] = useState([]);

    let { id, sp } = useParams();
    useEffect(async () => {
        const getProduct = async () => {
            const { data } = await sanPhamApi.getSPById(id, sp)
            setProduct(data)
        }
        getProduct();
        getProductDetal()
    }, [])

        const getProductDetal = async () => {
            console.log(document.getElementsByName('nameProduct')[0]);
            const { data } = await sanPhamApi.getProductRelated(sp, product.name)
            console.log(data);
            setProductDetail(data)
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

    return (
        <div>
            <div className="conEach">
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
                        <form action="shoppingCard.php" method="post" onsubmit="return checkStock()">
                            <input hidden type="text" name="id" defaultValue="A1" />
                            <h2 name="nameProduct">{product.name}</h2> <br /> <br />
                            <div className="price"><span id="price">{va(product.price)}</span> <span>VNĐ</span></div>
                            <div className="color">
                                <div className="rightLeft">Color</div>
                                <label id="colorChoose_0" name="checkColor" onclick="checkStock()">black<input onclick="colorr(this.value)" hidden onchange="changeColor(0)" id="color_0" type="radio" name="color" defaultValue="black" /></label><label id="colorChoose_1" name="checkColor" onclick="checkStock()">yellow<input onclick="colorr(this.value)" hidden onchange="changeColor(1)" id="color_1" type="radio" name="color" defaultValue="yellow" /></label>                  </div>
                            <div className="size">
                                <div className="rightLeft">Size</div>
                                <label id="sizeChoose_0" name="checkSize" onclick="checkStock()">l<input onclick="sizee(this.value)" hidden onchange="changeSize(0)" id="size_0" type="radio" name="size" defaultValue="l" /></label><label id="sizeChoose_1" name="checkSize" onclick="checkStock()">m<input onclick="sizee(this.value)" hidden onchange="changeSize(1)" id="size_1" type="radio" name="size" defaultValue="m" /></label><label id="sizeChoose_2" name="checkSize" onclick="checkStock()">s<input onclick="sizee(this.value)" hidden onchange="changeSize(2)" id="size_2" type="radio" name="size" defaultValue="s" /></label><label id="sizeChoose_3" name="checkSize" onclick="checkStock()">xl<input onclick="sizee(this.value)" hidden onchange="changeSize(3)" id="size_3" type="radio" name="size" defaultValue="xl" /></label>
                            </div>
                            <input type="text" hidden name="colorChange" id="colorChange" defaultValue />
                            <input type="text" hidden name="sizeChange" id="sizeChange" defaultValue />
                            <div className="soLuong">
                                <div className="rightLeft">Quantity</div>
                                <div className="number">
                                    <div id="buttonm" onclick="minus()"><i className="fa fa-minus" /></div>
                                    <input type="number" defaultValue={1} onkeyup="if(this.value<0){this.value= this.value * -1}" onblur="if(this.value == 0){this.value = 1}if(this.value == ''){this.value=1}else if(this.value > 134){this.value=134}" id="soLuong" name="soLuong" />
                                    <div id="buttonp" onclick="plus()"><i className="fa fa-plus" /></div>
                                </div>
                            </div>
                            <div className="action">
                                <button type="submit" name="them" id="them">
                                    <div className="addShopCard">Thêm vào giỏ hàng</div>
                                </button>
                                <button type="submit" id="mua">
                                    <div className="buy">Mua ngay</div>
                                </button>
                                <div className="out" id="out" style={{ display: 'none', textTransform: 'uppercase', color: 'red', marginLeft: 100, fontWeight: 600 }}> Unable To Buy </div>
                            </div>
                        </form>
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
                    </div>
                    <div className="left_card_infor" id="relatedPr">
                        <h5>Product Related</h5>
                        <div className="boxrela">
                            <a href="eachProduct.php?id=A1">
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <img src={product.image1} alt />
                                    <div className="name"><b>{productDetail.name}</b></div>
                                    <div className="price">{va(product.price)}</div>
                                </div>
                            </a>
                        </div>
                        <div className="boxrela">
                            <a href="eachProduct.php?id=A1">
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <img src={product.image1} alt />
                                    <div className="name"><b>{product.name}</b></div>
                                    <div className="price">{va(product.price)}</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail
