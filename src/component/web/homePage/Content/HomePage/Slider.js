import React, { Component } from 'react';

class Slider extends Component {
    render() {
        return (
            <div className="slide">
                <a target="_blank" className="sliderr" href=""><img className="slide_head" src="img/indexx/829banner_1.jpg" alt="x" /></a>
                <a target="_blank" className="sliderr" href=""><img className="slide_head" src="img/indexx/109banner_4.png" alt="x" /></a>
                <a target="_blank" className="sliderr" href=""><img className="slide_head" src="img/indexx/567banner_6.png" alt="x" /></a>
                <a target="_blank" className="sliderr" href=""><img className="slide_head" src="img/indexx/864banner_3.png" alt="x" /></a>
                <a target="_blank" className="sliderr" href=""><img className="slide_head" src="img/indexx/602banner_2.png" alt="x" /></a>
                <a target="_blank" className="sliderr" href=""><img className="slide_head" src="img/indexx/362banner_7.jpg" alt="x" /></a>
                <a target="_blank" className="sliderr" href=""><img className="slide_head" src="img/indexx/351banner_5.png" alt="x" /></a>
                <div className="but" style={{ zIndex: 200 }}>
                    <a className="prev">&#10094;</a>
                    <a className="next">❯</a>
                </div>
                <div className="dot">
                    <div className="dotin" />
                    <div className="dotin" />
                    <div className="dotin" />
                    <div className="dotin" />
                    <div className="dotin" />
                    <div className="dotin" />
                    <div className="dotin" />
                </div>
            </div>
        );
    }
}

export default Slider;