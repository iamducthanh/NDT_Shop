import Filter from './Filter';
import SanPham from './SanPham';
import React from 'react'
import { useEffect, useState } from 'react';

const GianHang = (props) => {
    const [sapXep, setSapXep] = useState('none');

    const onChangeOption = (event) => {
        setSapXep(event.target.value)
        props.resertPage(event.target.value)
    }

    const alertBox = (display) => {
        if (display == 'unset') {
          document.getElementById('alertBox').style.display = 'unset';
        } else {
          document.getElementById('alertBox').style.display = 'none';
        }
      }

    return (
        <div className="container">
            <div className="alertBox" id="alertBox">
                Thêm giỏ hàng thành công<br />
                <button onClick={alertBox}> Đóng </button>
            </div>
            <div>
                <div className="headerAo">
                    <h1>{props.title}</h1>
                </div>
                <div className="sortAo">
                    <form>
                        <select name="gia11" onChange={onChangeOption}>
                            <option value="none">Sắp xếp theo</option>
                            <option value="asc">Giá tăng dần</option>
                            <option value="desc">Giá giảm dần</option>
                        </select>
\                    </form>
                </div>
                <div className="ok">
                    <div className="bodyAo">
                        <Filter {...props} />
                        <div className="hdhd">
                            <div className="midAo">
                                {props.data.map((product) => (
                                    <SanPham data={product} sp={props.sp}/>
                                ))}
                            </div>
                            <div style={{ display: 'flex' }}>
                                <button className="ptButton" name="page" onClick={props.loc.bind(this, sapXep, 'pre')}>
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
