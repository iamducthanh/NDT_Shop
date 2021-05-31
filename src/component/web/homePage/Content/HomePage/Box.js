import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div className="box">
                <div className="border">
                    <a href="">
                        <div className="box1">
                            <div className="text" style={{ textTransform: 'uppercase' }}>BÁN CHẠY <span>XEM CHI TIẾT</span></div>
                            <div className="img"><img src="img/indexx/17.jpg" alt /></div>
                        </div>
                    </a>
                    <a href="">
                        <div className="box2">
                            <div className="text" style={{ textTransform: 'uppercase' }}>HÀNG MỚI VỀ <span>XEM CHI TIẾT</span></div>
                            <div className="img"><img src="img/indexx/18.jpg" alt /></div>
                        </div>
                    </a>
                    <a href="">
                        <div className="box3">
                            <div className="text" style={{ textTransform: 'uppercase' }}>TRANG SỨC <span>XEM CHI TIẾT</span></div>
                            <div className="img"><img src="img/indexx/19.jpg" alt /></div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Box;