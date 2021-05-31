import React, { Component } from 'react';

class Circle extends Component {
    render() {
        return (
            <div className="circle-content">
                <div className="header">
                    <h1 data-aos-offset={300}>Đảm bảo chất lượng</h1>
                    <h3 data-aos-offset={300}>quick scroll</h3>
                </div>
                <div className="content">
                    <div className="left">
                        <a href="" target="_blank" className="paddingct" style={{ height: '60%' }}>
                            <div className="text1" data-aos-offset={200}>
                                <h3>We history</h3>
                                <span>About me and all my public program I did. That insted this website. <br />Click to see more...</span>
                            </div>
                        </a>
                        <div className="paddingct">
                            <div className="text2" data-aos-offset={100}>
                                <h3>Bán chạy nhất<i style={{ marginLeft: 6 }} className="fa fa-sellsy" /></h3>
                                <span>Sản phẩm bán chạy nhất.</span>
                                <span style={{ fontWeight: 500 }}> Click để xem ngay</span>
                            </div>
                        </div>
                    </div>
                    <div className="mid">
                        <div className="pic" data-aos-offset={300}><img src="img/indexx/logoBlack.png" alt /></div>
                        <div style={{ marginTop: '-100px' }} className="paddingct">
                            <div className="text" data-aos-offset={0}>
                                <h3 style={{ width: 'fit-content' }}>Địa chỉ &amp; liên hệ</h3>
                                <span>Thông tin liên hệ và địa chỉ của chúng tôi Bạn có thể xem nó khi
            click vào đây</span>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="paddingct" style={{ height: '60%' }}>
                            <div className="text1" data-aos-offset={200}>
                                <h3>Danh sách tất cả sản phẩm</h3>
                                <span>Tổng hợp các sản phẩm theo nội dung giúp tìm kiếm dễ dàng hơn<br /></span>
                                <span style={{ fontWeight: 500 }}> Click để xem ngay </span>
                            </div>
                        </div>
                        <div className="paddingct">
                            <div className="text2" data-aos-offset={100} style={{ width: '100%' }}>
                                <h3>Lựa chọn<i style={{ marginLeft: 6 }} className="fa fa-star" /></h3>
                                <span>Bộ sưu tập theo mùa<br /></span>
                                <span style={{ fontWeight: 500 }}> Click để xem ngay </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle" />
            </div>
        );
    }
}

export default Circle;