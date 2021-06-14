import { useForm } from 'react-hook-form'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import danhMucApi from '../api/danhMucApi'

const AddDanhMuc = (props) => {
    let history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = async (data) => {
        const newData = {
            tenloai: data.tenloai,
            chitietloai: [
              {
                tenchitietloai: "",
                url: ""
              }
            ]
        }
        await danhMucApi.addDanhMuc(newData)
        quayLai()
    }
    const quayLai = () => {
        history.push(`/admin/danh-muc`)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Thêm danh mục{props.loai}</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to="#" className="btn btn-primary">Quay lại</Link>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="productName" className="form-label">Tên danh mục</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tên danh mục"
                    style={{ width: 700 }}
                    id="productName"
                    {...register('tenloai', { required: true })} />
                {errors.tenloai && <div id="emailHelp" className="form-text text-danger">Không được để trống tên danh mục.</div>}
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginBottom: 50 }}>Thêm</button>
        </form>
    )
}

export default AddDanhMuc
