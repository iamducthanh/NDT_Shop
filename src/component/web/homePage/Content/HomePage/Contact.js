import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact" id="contact1" style={{ left: '-100px' }}>
                <div className="phone"><img src="png/phone.png" alt /><span>0944485574</span></div>
                <div className="mail"><img src="png/gmailc.png" alt /><span>ducthanh260801@gmail.com</span></div>
                <a href="https://www.facebook.com/nguyenhoanglong.1212001/" target="_blank">
                    <div className="fb"><img src="png/fb.png" alt /><span>Thành</span></div>
                </a>
                <a href="https://www.github.com/iamducthanh" target="_blank">
                    <div className="insta"><img src="png/instac.png" alt /><span>iamducthanh</span></div>
                </a>
            </div>
        );
    }
}

export default Contact;