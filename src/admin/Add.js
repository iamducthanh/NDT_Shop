import { useForm } from 'react-hook-form'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useParams} from 'react-router-dom'
import productApi from '../api/productApi'

const AddProduct = (props) => {
    let { sp } = useParams()
    console.log(sp);

    let history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const submit = (data) => {
        const dataNew = {
            loaisp: sp,
            ...data
        }
        productApi.add(dataNew)
        quayLai()
    }
    const quayLai = () => {
        history.push(`/admin/product/${sp}`)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Thêm {props.loai}</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                    <Link to="#" onClick={quayLai} className="btn btn-primary">Quay lại</Link>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="productName" className="form-label">Tên sản phẩm</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tên sản phẩm"
                    style={{width: 700}}
                    id="productName"
                    {...register('name', { required: true })} />
                {errors.name && <div id="emailHelp" className="form-text text-danger">Không được để trống tên sản phẩm.</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">Giá</label>
                <input
                    type="number"
                    className="form-control"
                    min='1'
                    placeholder="Giá nhỏ nhất"
                    style={{width: 700}}
                    id="price"
                    {...register('price', { required: true })} />
                {errors.price && <div id="emailHelp" className="form-text text-danger">Không được để trống giá sản phẩm.</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Hình ảnh 1</label>
                <input
                    type="text"
                    style={{width: 700}}
                    placeholder="Link ảnh 1"
                    className="form-control"
                    id="quantity"
                    {...register('image1', { required: true })} />
                {errors.image1 && <div id="emailHelp" className="form-text text-danger">Không được để trống hình ảnh.</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Hình ảnh 2</label>
                <input
                    type="text"
                    style={{width: 700}}
                    className="form-control"
                    placeholder="Link ảnh 2"
                    id="quantity"
                    {...register('image2', { required: true })} />
                {errors.image2 && <div id="emailHelp" className="form-text text-danger">Không được để trống hình ảnh.</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Hình ảnh 3</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Link ảnh 3"
                    style={{width: 700}}
                    id="quantity"
                    {...register('image3', { required: true })} />
                {errors.image3 && <div id="emailHelp" className="form-text text-danger">Không được để trống hình ảnh.</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Số lượng</label>
                <input
                    type="number"
                    className="form-control"
                    min='1'
                    style={{width: 700}}
                    placeholder="Số lượng"
                    id="quantity"
                    {...register('soLuong', { required: true })} />
                {errors.soLuong && <div id="emailHelp" className="form-text text-danger">Không được để trống số lượng sản phẩm.</div>}
            </div>
            <button type="submit" className="btn btn-primary" style={{marginBottom: 50}}>Thêm</button>
        </form>
    )
}

export default AddProduct