import React from 'react'
import Header from '../component/admin/Header';
import { Link, useParams } from 'react-router-dom';
import danhMucApi from '../api/danhMucApi';
import { useEffect, useState } from 'react';

const QuanLiDanhMuc = () => {
    const [danhMuc, setDanhMuc] = useState([]);
    useEffect(() => {
        getDanhMuc();
    }, [])

    const getDanhMuc = async () => {
        const { data } = await danhMucApi.getAllDanhMuc();
        console.log(data);
        setDanhMuc(data);
    }

    const themSP = async (id) => {
        var input = prompt('Nhập loại sản phẩm');
        var url = xoadau(input).replace(' ', '-')
        const { data } = await danhMucApi.getAllDanhMucById(id)
        data.chitietloai.push({
            tenchitietloai: input,
            url: url
        })
        await danhMucApi.updateDanhMuc(id, data)
        getDanhMuc()
        alert('Thêm thành công')
    }

    const xoadau = (str) => {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str;
    }

    return (
        <div><Header pla={'Tìm theo tên danh mục...'} />
            <div className="d-flex justify-content-between flex-md-nowrap align-items-center mb-3">
                <h2 className="h2">Danh mục</h2>
                <Link to={`/admin/danh-muc/add`} className="btn btn-primary">Thêm danh mục</Link>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Loại</th>
                            <th>Các sản phẩm</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {danhMuc.map((danhmuc, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td style={{ width: '200px' }}>{danhmuc.tenloai}</td>

                                <td>
                                    {danhmuc.chitietloai.map((chitietloai) => (
                                        <tr style={{ background: 'transparent' }}>
                                            <td>{chitietloai.tenchitietloai}</td>
                                        </tr>
                                    ))}
                                </td>
                                <th>
                                    <button className="btn btn-primary" onClick={themSP.bind(this, danhmuc.id)}>Thêm sản phẩm</button>
                                    <button className="btn btn-danger">Xóa</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default QuanLiDanhMuc
