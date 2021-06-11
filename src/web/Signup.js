import React from 'react'
import { get, useForm } from 'react-hook-form'
import { useHistory } from 'react-router';
import userApi from '../api/userApi';
import emailjs from 'emailjs-com'
import { useEffect, useState } from 'react';


const Signup = () => {
    let history = useHistory();
    var checkSignup = false;
    const [maCode, setMaCode] = useState(1);
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    var maXacNhan = 0;
    const signup = async (data, r) => {
        if (data.macode == maCode) {
            console.log(checkSignup);
            if (checkSignup) {
                let res = await userApi.addUser(data)
                alert('Đăng kí thành công!')
                history.push('/login')
            }
        } else {
            alert('Mã xác nhận không đúng!')
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

    const check = (event) => {
        if (event.target.value == document.getElementsByClassName('passs')[0].value) {
            document.getElementById('errorComfirm').style.display = 'none'
            checkSignup = true
        } else {
            document.getElementById('errorComfirm').style.display = 'inline-block'
            checkSignup = false
        }
    }

    const checkTrungEmail = async (event) => {
        const { data } = await userApi.getUserByEmail(event.target.value)
        if (data.length > 0) {
            document.getElementById('errorEmail').style.display = 'inline-block'
            checkSignup = false
        } else {
            document.getElementById('errorEmail').style.display = 'none'
            checkSignup = true
        }
    }

    const checkUser = async (event) => {
        const { data } = await userApi.getUserByUsername(event.target.value)
        if (data.length > 0) {
            document.getElementById('errorUser').style.display = 'inline-block'
            checkSignup = false
        } else {
            document.getElementById('errorUser').style.display = 'none'
            checkSignup = true
        }
    }

    var i = 60;
    const seti = () => {
        i = i - 1;
        document.getElementById('nutSleep').innerHTML = i + 's'
        console.log(i);
        setTimeout(seti2, 1000)
    }

    const seti2 = () => {
        if (i <= 0) {
            document.getElementById('nutGuiMa').style.display = 'unset'
            document.getElementById('nutSleep').style.display = 'none'
        } else {
            i = i - 1;
            document.getElementById('nutSleep').innerHTML = i + 's'
            console.log(i);
            setTimeout(seti, 1000)
        }
    }


    const guiMa = () => {
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementsByClassName('email')[0].value)) {
            maXacNhan = Math.round(Math.random() * (999999 - 111111) + 111111);
            alert(`Mã xác nhận đã được gửi đến ${document.getElementsByClassName('email')[0].value}`);
            const templateId = 'template_75sb4wn';
            const serviceID = 'ducthanh260801@gmail.com';
            sendFeedback(serviceID, templateId, {
                to_name: `${document.getElementById('login').value}`,
                from_name: "Chào mừng đến với NDT Shop",
                message: "Mã xác nhận tài khoản của bạn là: " + maXacNhan,
                nguoi_nhan: document.getElementsByClassName('email')[0].value,
                reply_to: "ducthanh260801@gmail.com"
            })
            document.getElementById('nutGuiMa').style.display = 'none'
            document.getElementById('nutSleep').style.display = 'unset'
            setMaCode(maXacNhan)
            i = 10;
            seti();
        } else {
            alert('Bạn nhập sai định dạng email')
        }
    }
    return (
        <div className="wrapper fadeInDown" id="contai">
            <div id="formContent">
                <div className="fadeIn first">
                    <img src="data:image/png;base64,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" id="icon" alt="User Icon" />
                </div>

                <form onSubmit={handleSubmit(signup)}>
                    <input
                        type="text"
                        id="login"
                        name="login"
                        onKeyUp={checkUser}
                        placeholder="Username"
                        {...register('username', { required: true })}
                    />
                    {errors.username && <div className="form-text text-danger">Bạn không được để trống tài khoản.</div>}
                    <br /> <div id="errorUser" className="form-text text-danger" style={{ display: 'none' }}>Username này đã tồn tại</div> <br />
                    <input
                        type="text"
                        id="password"
                        className="email"
                        name="login"
                        onKeyUp={checkTrungEmail}
                        placeholder="Email"
                        {...register('email', {
                            required: "Vui lòng nhập Email",
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Email không đúng định dạng"
                            }
                        })} />
                    {errors.email && <div className="form-text text-danger">{errors.email.message}</div>}
                    <br /> <div id="errorEmail" className="form-text text-danger" style={{ display: 'none' }}>Email này đã được đăng kí</div> <br />

                    <input
                        type="text"
                        id="password"
                        className="passs"
                        name="login"
                        placeholder="Password"
                        {...register('password', { required: true })}
                    />
                    {errors.username && <div className="form-text text-danger">Bạn không được để trống tài khoản.</div>}
                    <input
                        type="text"
                        id="password"
                        name="login"
                        onKeyUp={check}
                        placeholder="Comfirm password"
                        {...register('passwordComfirm', {
                            required: true
                        })}
                    /> <br />
                    {errors.passwordComfirm && <div className="form-text text-danger">Không được để trống password</div>}
                    <div id="errorComfirm" className="form-text text-danger" style={{ display: 'none' }}>Password và Comfirmpassword phải giống nhau</div>
                    <br />
                    <input
                        id="inputComfirm"
                        placeholder='Mã xác nhận'
                        {...register('macode', {
                            required: true
                        })}
                    ></input>
                    <div className="btn btn-danger" id="nutGuiMa" onClick={guiMa}>Gửi mã</div>
                    <button className="btn btn-danger" id="nutSleep" style={{ display: 'none' }} onClick={guiMa} disabled></button>
                    <br />
                    <input
                        type="submit"
                        id="subbb"
                        className="fadeIn fourth"
                        defaultValue="Log In" />
                </form>


                <div id="formFooter">
                    <a id="aLogin" className="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
        </div>
    )
}

export default Signup
