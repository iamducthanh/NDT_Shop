import React from 'react'

const Comment = (props) => {
    return (
        <div className="boxCmt">
            <div className="imgRate">
                <img src="https://taimienphi.vn/tmp/cf/aut/mAKI-top-anh-dai-dien-dep-chat-1.jpg" alt />
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
