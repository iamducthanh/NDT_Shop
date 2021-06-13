import React from 'react'
import img from '../../../css/regift.gif'

const Comment = (props) => {
    return (
        <div className="boxCmt">
            <div className="imgRate">
                <img src={img} alt />
            </div>
            <div className="cmt">
                <div className="name">{props.comment.username}</div>
                <div className="star">
                    <i className="fa fa-star" style={{ color: 'orange' }} />
                    <i className="fa fa-star" style={{ color: 'orange' }} />
                    <i className="fa fa-star" style={{ color: 'orange' }} />
                    <i className="fa fa-star" style={{ color: 'orange' }} />
                    <i className="fa fa-star" style={{ color: 'orange' }} />
                </div>
                <br/>
                <div className="nd">{props.comment.noiDung}</div>
                <br />
                <div className="date">{props.comment.ngayThang}</div>
            </div>
        </div>
    )
}

export default Comment
