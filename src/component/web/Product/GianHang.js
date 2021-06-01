import Filter from './Filter';
import SanPham from './SanPham';
import React from 'react'

const GianHang = (props) => {

    return (
        <div className="container">
            <div>
                <div className="headerAo">
                    <h1>Áo khoác</h1>
                </div>
                <div className="sortAo">
                    <form action method="get">
                        <select name="gia" id>
                            <option value="none">Sắp xếp theo</option>
                            <option value="ASC">Giá tăng dần</option>
                            <option value="DESC">Giá giảm dần</option>
                        </select>
                        <button type="submit" id="Gia_bt" style={{ display: 'none' }}>sm</button>
                    </form>
                </div>
                <div className="ok">
                    <div className="bodyAo">
                        <Filter />
                        <div className="hdhd">
                            <div className="midAo">
                                {props.data.map((product) => (
                                    <SanPham data={product} />
                                ))}
                            </div>
                            <div style={{ display: 'flex' }}>
                                <button className="ptButton" name="page" onClick={props.prePage}>
                                    <i className="fa fa-angle-double-left" />
                                </button>
                                <div className="ptNumber" style={{ backgroundColor: 'red', borderRadius: 2, boxShadow: '0 1px 4px black' }}>{props.page}</div>
                                <button className="ptButton" name="" onClick={props.nextPage}><i className="fa fa-angle-double-right" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default GianHang
