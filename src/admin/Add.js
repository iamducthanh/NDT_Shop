import { useForm } from 'react-hook-form'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const AddProduct = (props) => {
    let history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submit = (data) => {
        props.onAdd(data);
        history.push(`/admin/product/${props.urlP}`)
    }
    const quayLai = () => {
        history.push(`/admin/product/${props.urlP}`)
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
                <label htmlFor="price" className="form-label">Giá nhỏ nhất</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Giá nhỏ nhất"
                    style={{width: 700}}
                    id="price"
                    {...register('priceMin', { required: true })} />
                {errors.priceMin && <div id="emailHelp" className="form-text text-danger">Không được để trống giá sản phẩm.</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">Giá lớn nhất</label>
                <input
                    type="number"
                    style={{width: 700}}
                    placeholder="Giá lớn nhất"
                    className="form-control"
                    id="price"
                    {...register('priceMax', { required: true })} />
                {errors.priceMax && <div id="emailHelp" className="form-text text-danger">Không được để trống giá sản phẩm.</div>}
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