import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div className="leftAo">
                <div className="sortLeft">
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
                    <div className="cost">
                        <div className="title">
                            <div>Giá</div>
                            <div><span><i className="fa fa-angle-down" id="kGiaAr" /></span></div>
                        </div>
                        <div className="checkBox" id="khoangGia" style={{ textAlign: 'left' }}>
                            <span><input type="radio" name="khoangGia" defaultValue="(`price` <= 500000)" onchange="ChangeGia1()" /> Dưới
                        500K</span>
                            <span><input type="radio" name="khoangGia" defaultValue="(`price` >= 500000 and `price` <= 1000000)" onchange="ChangeGia2()" /> Từ 500k - 1.000K</span>
                            <span><input type="radio" name="khoangGia" defaultValue="(`price` >= 10000 and `price` <= 1500000)" onchange="ChangeGia3()" /> Từ 1.000k - 1.500k</span>
                            <span><input type="radio" name="khoangGia" defaultValue="(`price`>= 1500000 and `price`<= 2000000)" onchange="ChangeGia4()" /> Từ 1.500k - 2.000K</span>
                            <span><input type="radio" name="khoangGia" defaultValue="(`price` >= 2000000)" onchange="ChangeGia5()" /> Trên
                        2.000k</span>
                        </div>
                    </div>
                    <button type="submit" className="filter" id="filter" name="filter">Filter</button>
                    <div className="deleteSort">
                        <form action method="get"><button type="submit" name="deleteSort" id="deleteSort">Xoá tất cả lọc</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;