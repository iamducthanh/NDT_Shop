import { useForm } from 'react-hook-form'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const AddProduct = (props) => {
    let history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submit = (data) => {
        props.onAdd(data);
        history.push('/admin/products')
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Thêm sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to="/admin/products/" className="btn btn-primary">Quay lại</Link>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="productName" className="form-label">Tên sản phẩm</label>
                <input
                    type="text"
                    className="form-control"
                    id="productName"
                    {...register('name', { required: true })} />
                {errors.name && <div id="emailHelp" className="form-text text-danger">Bạn không được để trống tên sản phẩm.</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Giá</label>
                <input
                    type="number"
                    className="form-control"
                    id="price"
                    {...register('price', { required: true })} />
                {errors.price && <div id="emailHelp" className="form-text text-danger">Bạn không được để trống giá sản phẩm.</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Số lượng</label>
                <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    {...register('quantity', { required: true })} />
                {errors.quantity && <div id="emailHelp" className="form-text text-danger">Bạn không được để trống số lượng sản phẩm.</div>}
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="trangThai" {...register('status')} />
                <label className="form-check-label" htmlFor="trangThai">Còn hàng</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddProduct