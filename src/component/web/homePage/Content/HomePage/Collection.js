import React, { Component } from 'react';

class Collection extends Component {
    render() {
        return (
            <div className="full-fes" id="full-fes">
                <a className="left" href="">
                    {/* <video id="vid" loop>
                    <source src="img/indexx/winter.jpg" type="video/mp4" />
                </video> */}
                    <img src="img/indexx/winter.jpg" alt />
                    <div className="text">
                        <p>Winter Collection</p>
                        <span>The Winter collection of 2020 and newest 2021 is came</span>
                        <span>whish it make satisfied</span>
                    </div>
                </a>
                <a className="mid" href="">
                    {/* <video id="vid2" loop>
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-conceptual-image-of-a-man-with-glasses-and-hair-with-32646-large.mp4" type="video/mp4" />
                </video> */}
                    <img src="img/indexx/party1.jpg" alt />
                    <div className="text">
                        <p>Party Collection</p>
                        <span>The Party collection of 2020 and newest 2021 is came</span><br />
                        <span>whish it make satisfied</span>
                    </div>
                </a>
                <a className="right" href="">
                    {/* <video id="vid3" loop>
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-happy-and-funny-girl-with-a-stuffed-santa-claus-39748-large.mp4" type="video/mp4" />
                </video> */}
                    <img src="img/indexx/summer.jpg" alt />
                    <div className="text">
                        <p>Summer Collection</p>
                        <span>The Summer collection of 2020 and newest 2021 is came</span><br />
                        <span>whish it make satisfied</span>
                    </div>
                </a>
            </div>
        );
    }
}

export default Collection;