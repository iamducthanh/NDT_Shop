import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import spAPI from '../api/sanPhamApi';
import productApi from '../api/productApi';
import danhMucApi from '../api/danhMucApi';
import Header from '../component/admin/Header';


const EditDanhMuc = () => {
    let { id } = useParams()
    const [danhMuc, setDanhMuc] = useState([])
    const [chiTietDM, setChiTietDM] = useState([])

    useEffect(() => {
        const getDanhMuc = async () => {
            const { data } = await danhMucApi.getAllDanhMucById(id)
            console.log(data);
            setDanhMuc(data)
        }
        getDanhMuc();
    }, []) 


    const show = () => {
        console.log(danhMuc);
    }     
    return (
        <div><Header pla={'Tìm theo tên danh mục...'} />
            <div className="d-flex justify-content-between flex-md-nowrap align-items-center mb-3">
                <h2 className="h2">{danhMuc.tenloai}</h2>
                <Link to={`/admin/danh-muc/add`} className="btn btn-primary">Thêm loại sản phẩm</Link>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Loại sản phẩm</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {danhMuc.chitietloai.map((d)=>(
                            <p>d</p>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>  
    )
}

export default EditDanhMuc
