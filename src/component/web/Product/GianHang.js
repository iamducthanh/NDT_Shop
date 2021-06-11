import Filter from './Filter';
import SanPham from './SanPham';
import React from 'react'
import { useEffect, useState } from 'react';

const GianHang = (props) => {
    const [sapXep, setSapXep] = useState('none');
    const onChangeOption = (key) => {
        setSapXep(key)
        props.resertPage(key)
        closeCbb()
    }

    const onChangeFillter = (event) => {
        props.filByPrice(event, sapXep)
    }

    const alertBox = (display) => {
        if (display == 'unset') {
            document.getElementById('alertBox').style.display = 'unset';
        } else {
            document.getElementById('alertBox').style.display = 'none';
        }
    }

    const closeCbb = () => {
        document.getElementById('options-view-button').checked = false
    } 

    return (
        <div className="container">
            <div className="alertBox" id="alertBox">
                Thêm giỏ hàng thành công<br />
                <button onClick={alertBox}> Đóng </button>
            </div>
            <div>
                <div className="headerAo">
                    <h1>Sản phẩm</h1>
                </div>
                {/* <form>
                    <select name="gia11" onChange={onChangeOption}>
                        <option value="none">Sắp xếp theo</option>
                        <option value="asc">Giá tăng dần</option>
                        <option value="desc">Giá giảm dần</option>
                    </select>
                </form> */}
                <form id="app-cover" style={{ zIndex: '1' }}>
                    <div id="select-box">
                        <input type="checkbox" id="options-view-button" />
                        <div id="select-button" className="brd" >
                            <div id="selected-value" style={{marginBottom: '20px'}}>
                                <span className="sortCbb">Sắp xếp theo</span>
                            </div>
                        </div>
                        <div id="options">
                            <div className="option" onClick={onChangeOption.bind(this, 'none')}>
                                <input className="s-c top" type="radio" name="platform" defaultValue="codepen" />
                                <input className="s-c bottom" type="radio" name="platform" defaultValue="codepen" />
                                {/* <i className="fab fa-codepen" /> */}
                                <span className="label" >Sắp xếp theo</span>
                                <span className="opt-val">Sắp xếp theo</span>
                            </div>
                            <div className="option" onClick={onChangeOption.bind(this, 'asc')}>
                                <input className="s-c top" type="radio" name="platform" defaultValue="dribbble" />
                                <input className="s-c bottom" type="radio" name="platform" defaultValue="dribbble" />
                                {/* <i className="fab fa-dribbble" /> */}
                                <span className="label">Giá tăng dần</span>
                                <span className="opt-val">Giá tăng dần</span>
                            </div>
                            <div className="option" onClick={onChangeOption.bind(this, 'desc')}>
                                <input className="s-c top" type="radio" name="platform" defaultValue="behance" />
                                <input className="s-c bottom" type="radio" name="platform" defaultValue="behance" />
                                {/* <i className="fab fa-behance" /> */}
                                <span className="label">Giá giảm dần</span>
                                <span className="opt-val">Giá giảm dần</span>
                            </div>
                            {/* <div className="option">
                                <input className="s-c top" type="radio" name="platform" defaultValue="hackerrank" />
                                <input className="s-c bottom" type="radio" name="platform" defaultValue="hackerrank" />
                                <i className="fab fa-hackerrank" />
                                <span className="label">HackerRank</span>
                                <span className="opt-val">HackerRank</span>
                            </div>
                            <div className="option">
                                <input className="s-c top" type="radio" name="platform" defaultValue="stackoverflow" />
                                <input className="s-c bottom" type="radio" name="platform" defaultValue="stackoverflow" />
                                <i className="fab fa-stack-overflow" />
                                <span className="label">StackOverflow</span>
                                <span className="opt-val">StackOverflow</span>
                            </div>
                            <div className="option">
                                <input className="s-c top" type="radio" name="platform" defaultValue="freecodecamp" />
                                <input className="s-c bottom" type="radio" name="platform" defaultValue="freecodecamp" />
                                <i className="fab fa-free-code-camp" />
                                <span className="label">FreeCodeCamp</span>
                                <span className="opt-val">FreeCodeCamp</span>
                            </div> */}
                            <div id="option-bg" />
                        </div>
                    </div>
                </form>

                <div className="ok">
                    <div className="bodyAo">
                        <div className="leftAo">
                            <div className="sortLeft" >
                                <div className="color">
                                    <div className="title">
                                        <div>Màu</div>
                                        <div><span><i className="fa fa-angle-down" id="ColorArrow" /></span></div>
                                    </div>
                                    <div className="sortColor" id="sortColor" style={{ textAlign: 'left' }}>
                                        <label id="boxColor1" className="boxColor black"><input hidden id="color1" type="checkbox" name="color1" defaultValue="black" /></label>
                                        <label id="boxColor2" className="boxColor yellow"><input hidden id="color2" type="checkbox" name="color2" defaultValue="yellow" /></label>
                                        <label id="boxColor3" className="boxColor white"><input hidden id="color3" type="checkbox" name="color3" defaultValue="white" /></label>

                                    </div>
                                </div>

                                <div className="size">
                                    <div className="title">
                                        <div>Size</div>
                                        <div><span><i className="fa fa-angle-down" id="sortSizeArrow" /></span></div>
                                    </div>
                                    <div className="title2" id="sortSize">
                                        <label id="boxSize1" className="boxSize">L<input hidden id="size1" type="checkbox" name="size1" defaultValue="l" /></label>
                                        <label id="boxSize2" className="boxSize">M<input hidden id="size2" type="checkbox" name="size2" defaultValue="m" /></label>
                                        <label id="boxSize3" className="boxSize">S<input hidden id="size3" type="checkbox" name="size3" defaultValue="s" /></label>
                                        <label id="boxSize4" className="boxSize">XL<input hidden id="size4" type="checkbox" name="size4" defaultValue="xl" /></label>

                                    </div>
                                </div>
                                <select className="cost" id="khoangGia" onChange={onChangeFillter}>
                                    <option value="0">Khoảng giá</option>
                                    <option value="1">Từ 0 - 500k</option>
                                    <option value="2">Từ 500k - 1.000K</option>
                                    <option value="3">Từ 1.000k - 1.500k</option>
                                    <option value="4">Trên 1500k</option>
                                </select>
                                <button type="submit" className="filter" id="filter" name="filter">Filter</button>
                                <div className="deleteSort">
                                    <form action method="get"><button type="submit" name="deleteSort" id="deleteSort">Xoá tất cả lọc</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="hdhd">
                            <div className="midAo">
                                {props.data.map((product) => (
                                    <SanPham data={product} sp={props.sp} />
                                ))}
                            </div>
                            <div style={{ display: 'flex' }}>
                                <button className="ptButton" name="page" id="preT" onClick={props.loc.bind(this, sapXep, 'pre')}>
                                    <i className="fa fa-angle-double-left" />
                                </button>
                                <div className="ptNumber" style={{ backgroundColor: 'red', borderRadius: 2, boxShadow: '0 1px 4px black' }}>{props.page}</div>
                                <button className="ptButton" name="" onClick={props.loc.bind(this, sapXep, 'next')}><i className="fa fa-angle-double-right" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default GianHang
