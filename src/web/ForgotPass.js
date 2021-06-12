import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import userApi from '../api/userApi';
import { useEffect, useState } from 'react';


const ForgotPass = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [maCode, setMaCode] = useState(1);
    const [user, setUser] = useState([]);

    var maXacNhan = 0;
    const findEmail = async () => {
        var email = document.getElementsByName('emailFind')[0].value
        const { data } = await userApi.getUserByEmail(email)
        setUser(data)
        if (data.length == 0) {
            document.getElementsByClassName('formp2')[0].style.display = 'unset'
        } else {
            maXacNhan = Math.round(Math.random() * (999999 - 111111) + 111111);
            alert(`Mã xác nhận đã được gửi đến ${email}`);
            const templateId = 'template_75sb4wn';
            const serviceID = 'ducthanh260801@gmail.com';
            sendFeedback(serviceID, templateId, {
                to_name: `${email}`,
                from_name: "Chào mừng đến với NDT Shop",
                message: "Mã xác nhận lấy lại mật khẩu của bạn là: " + maXacNhan,
                nguoi_nhan: email,
                reply_to: "ducthanh260801@gmail.com"
            })
            setMaCode(maXacNhan)
            document.getElementsByClassName('formp2')[0].style.display = 'none'
            document.getElementsByClassName('form1')[0].style.display = 'none'
            document.getElementsByClassName('form2')[0].style.display = 'unset'
        }
    }

    const xacNhanMa = () => {
        var ma = document.getElementsByName('maXacNhan')[0].value
        if (ma == maCode) {
            document.getElementById('messege2').style.display = 'none'
            document.getElementsByClassName('form2')[0].style.display = 'none'
            document.getElementsByClassName('form3')[0].style.display = 'unset'
        } else {
            document.getElementById('messege2').style.display = 'unset'
            const dataNew = {

            }
        }
    }

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }

    const doiMauKhau = async (data) => {
        if (data.newpass != data.newnewpass) {
            document.getElementById('error4').style.display = 'unset'
        } else {
            document.getElementById('error4').style.display = 'none'
            const dataNew = {
                username: user[0].username,
                password: data.newpass,
                email: user[0].email,
                id: user[0].id
            }
            await userApi.update(dataNew, user[0].id)
            document.getElementById('alertBox7').style.display = 'unset'
            setTimeout(()=>{document.getElementById('backLogin').click()},1000)
        }
    }

    return (
        <div className="wrapper fadeInDown" id="contai">
            <div className="alertBox" id="alertBox7">
               Đổi mật khẩu thành công<br />
                <Link to="/login" id="backLogin"> Đóng </Link>
            </div>
            <div id="formContent" className="form1">
                <h2>Tìm tài khoản của bạn  1</h2>
                <hr />
                <p className="formp">Vui lòng nhập email để tìm kiếm tài khoản của bạn.</p>
                <div>
                    <input
                        type="text"
                        id="login"
                        name="emailFind"
                        placeholder="Địa chỉ email"
                    />
                    <br /> <div className="formp2"> Tìm kiếm không trả về kết quả nào. <br /> Vui lòng thử lại với thông tin khác.</div>
                    <hr />
                    <input
                        type="submit"
                        id="subbb"
                        className="fadeIn fourth"
                        defaultValue="Log In" onClick={findEmail} />
                </div>
                <div id="formFooter">
                    <a id="aLogin" className="underlineHover" href="#">Quay lại</a>
                </div>
            </div>
            <div id="formContent" className="form2">
                <h2>Nhập mã xác nhận</h2>
                <hr />
                <p>Nhập mã xác nhận đã gửi về email của bạn</p>
                <div>
                    <input
                        type="text"
                        id="login"
                        name="maXacNhan"
                        placeholder="Mã xác nhận"
                    />
                    <br />
                    <div className="form-text text-danger" id="messege2">Mã xác nhận chưa đúng.</div>
                    <hr />
                    <input
                        type="submit"
                        id="subbb"
                        onClick={xacNhanMa}
                        className="fadeIn fourth"
                        defaultValue="Log In" />
                </div>
                <div id="formFooter">
                    <a id="aLogin" className="underlineHover" href="#">Quay lại</a>
                </div>
            </div>

            <div id="formContent" className="form3">
                <h2>Đổi mật khẩu</h2>
                <hr />
                <p style={{ textAlign: 'left', marginLeft: '30px' }}>Thay đổi mật khẩu</p>
                <form onSubmit={handleSubmit(doiMauKhau)}>
                    <input
                        type="text"
                        id="login"
                        name="login"
                        placeholder="Mhập mật khẩu mới"
                        {...register('newpass', { required: true })}
                    />
                    {errors.newpass && <div className="form-text text-danger">Vui lòng nhập mật khẩu mới.</div>}
                    <input
                        type="text"
                        id="login"
                        name="login"
                        placeholder="Nhập lại mật khẩu mới"
                        {...register('newnewpass', { required: true })}
                    />
                    {errors.newnewpass && <div className="form-text text-danger">Vui lòng nhập mật khẩu mới.</div>}
                    <br /><div className="form-text text-danger" id="error4" style={{ display: "none" }}>Mật khẩu mới và nhập lại mật khẩu mới phải giống nhau</div>
                    <hr />
                    <input
                        type="submit"
                        id="subbb"
                        className="fadeIn fourth"
                        defaultValue="Log In" />
                </form>
                <div id="formFooter">
                    <a id="aLogin" className="underlineHover" href="#">Quay lại</a>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass
