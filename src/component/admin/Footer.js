import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="sticky-footer bg-white" style={{marginTop: 20}}>
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>NDT Shop</span>
                    </div>
                </div>
            </footer>
        )
    }
}
