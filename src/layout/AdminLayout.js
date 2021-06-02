import Header from '../component/admin/Header'
import Nav from '../component/admin/Nav'
import Footer from '../component/admin/Footer'
// import './adminnn.css'
import './sb-admin-2.css'
import './admin2.css'

import React from 'react'

const AdminLayout = (props) => {
    return (
        <div id="wrapper">
        <Nav/>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Header {...props}/>
                <div className="container-fluid" style={{marginLeft: 30}}>
                    {props.children}
                </div>
            </div>
            <Footer/>
            {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
    </div>
    )
}

export default AdminLayout

