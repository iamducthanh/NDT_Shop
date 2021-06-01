import React, { Component } from 'react'
import Header from '../component/admin/Header'
import Nav from '../component/admin/Nav'
import Footer from '../component/admin/Footer'
// import './adminnn.css'
import './sb-admin-2.css'
import './admin2.css'

export default class AdminLayout extends Component {
    render() {
        return (
            <div id="wrapper">
                <Nav/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header/>
                        <div className="container-fluid" style={{marginLeft: 30}}>
                            {this.props.children}
                        </div>
                    </div>
                    <Footer/>
                    {/* End of Footer */}
                </div>
                {/* End of Content Wrapper */}
            </div>


        )
    }
}
