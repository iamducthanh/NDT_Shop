import React from 'react'
import hoaDonApi from '../api/hoaDonApi';
import DonMuaItem from '../component/web/Product/DonMuaItem'
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'


const DonMua = () => {
    let history = useHistory()
    const [donMua, setDonMua] = useState([]);
    useEffect(() => {
        getHoaDon();
    }, [])

    const getHoaDon = async () => {
        const { data } = await hoaDonApi.getHoaDonByUsername(localStorage.getItem('username'))
        setDonMua(data)
    }

    const huyDonHang = async (id) => {
        if(window.confirm('Bạn có chắc muốn hủy đơn hàng?')){
            await hoaDonApi.remove(id)
            getHoaDon()
            back()
        }
    }

    const back = async () => {
        const { data } = await hoaDonApi.getHoaDonByUsername(localStorage.getItem('username'))
        if(data.length == 0){
            history.push('/')
        }
    }
    return (
        <div>
            {donMua.map((donMua, index) => (
                <DonMuaItem thanhToan = {donMua.thanhToan} huyDonHang={huyDonHang} idDonHang = {donMua.id} listProduct={donMua.product} trangthai={donMua.trangThai} />
            ))}
        </div>
    )
}

export default DonMua
