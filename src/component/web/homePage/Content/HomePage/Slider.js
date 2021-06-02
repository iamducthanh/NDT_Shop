import img1 from '../../../../img/indexx/829banner_1.jpg'
import img2 from '../../../../img/indexx/109banner_4.png'
import img3 from '../../../../img/indexx/567banner_6.png'
import img4 from '../../../../img/indexx/864banner_3.png'
import img5 from '../../../../img/indexx/602banner_2.png'
import img6 from '../../../../img/indexx/362banner_7.jpg'
import img7 from '../../../../img/indexx/351banner_5.png'

import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <div className="slide">
                <a target="_blank" className="sliderr" href=""><img className="slide_head" src={img1} alt="x" /></a>
                <a target="_blank" className="sliderr" href=""><img className="slide_head" src={img2} alt="x" /></a>
                <a target="_blank" className="sliderr" href=""><img className="slide_head" src={img3} alt="x" /></a>
                <a target="_blank" className="sliderr" href=""><img className="slide_head" src={img4} alt="x" /></a>
                <a target="_blank" className="sliderr" href=""><img className="slide_head" src={img5} alt="x" /></a>
                <a target="_blank" className="sliderr" href=""><img className="slide_head" src={img6} alt="x" /></a>
                <a target="_blank" className="sliderr" href=""><img className="slide_head" src={img7} alt="x" /></a>
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
        )
    }

}
