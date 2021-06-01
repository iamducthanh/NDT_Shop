import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'


const EditProduct = (props) => {
    let history = useHistory()
    let { id } = useParams()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [product, setProduct] = useState([])
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3005/products/${id}`)
                const data = await response.json();
                setProduct(data)
            } catch (error) {
                console.log(error);
            }
        }
        getProduct()
    },[])

    const quayLai = () => {
        history.push('/admin/product/ao-khoac')
    }

    const submit = (data) => {
        const dataNew = {
            id,
            ...data
        }
        props.onEdit(dataNew)
        history.push('/admin/product')
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Sửa sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to="" onClick={quayLai} className="btn btn-primary">Quay lại</Link>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="productName" className="form-label">Tên sản phẩm</label>
                <input
                    defaultValue={product.name}
                    type="text"
                    className="form-control"
                    id="productName"
                    {...register('name', { required: true })} />
                {errors.name && <div id="emailHelp" className="form-text text-danger">Bạn không được để trống tên sản phẩm.</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Giá</label>
                <input
                    defaultValue={product.price}
                    type="number"
                    className="form-control"
                    id="price"
                    {...register('price', { required: true })} />
                {errors.price && <div id="emailHelp" className="form-text text-danger">Bạn không được để trống giá sản phẩm.</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Số lượng</label>
                <input
                    defaultValue={product.quantity}
                    type="number"
                    className="form-control"
                    id="quantity"
                    {...register('quantity', { required: true })} />
                {errors.quantity && <div id="emailHelp" className="form-text text-danger">Bạn không được để trống số lượng sản phẩm.</div>}
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" defaultChecked={product.status} className="form-check-input" id="trangThai" {...register('status')} />
                <label className="form-check-label" htmlFor="trangThai">Còn hàng</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default EditProduct
