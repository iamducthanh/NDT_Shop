import React, { Component } from 'react';
import Filter from '../component/web/Product/Filter';
import SanPham from '../component/web/Product/SanPham';

class GianHang extends Component {
    render() {
        console.log(this.props);
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
                    <form action method="get" className="ok">
                        <div className="bodyAo">
                            <Filter/>
                            <div className="hdhd">
                                <div className="midAo">
                                    {this.props.listAo.map((aoKhoac)=>(
                                        <SanPham/>
                                    ))}
                                </div>
                                <form action method="get" className="phanTrang" style={{ display: 'flex' }}>
                                    <button className="ptButton" name="page" value={0} type="submit">
                                        <i className="fa fa-angle-double-left" />
                                    </button>
                                    <div className="ptNumber" style={{ backgroundColor: 'red', borderRadius: 2, boxShadow: '0 1px 4px black' }}>1</div>
                                    <button className="ptButton" name="page" value={2} type="submit"><i className="fa fa-angle-double-right" /></button>
                                </form>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default GianHang;