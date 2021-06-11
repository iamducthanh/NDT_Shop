import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import spAPI from '../api/sanPhamApi';
import productApi from '../api/productApi';


const EditProduct = (props) => {
    let history = useHistory()
    let { id, sp } = useParams()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [product, setProduct] = useState([])

    useEffect(() => {
        const getSanPham = async () => {
            const { data } = await productApi.getById(id)
            reset(data)
            setProduct(data)
        }
        getSanPham();
    }, [])  

    const submit = async (data) => {
        // const dataNew = {
        //     id,
        //     ...data
        // }
        await productApi.update(data.id, data)
        history.push(`/admin/product/${sp}`)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Sửa sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to="/admin/product/ao-khoac" className="btn btn-primary">Quay lại</Link>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="productName" className="form-label">Tên sản phẩm</label>
                <input
                    type="text"
                    className="form-control"
                    defaultValue= {product.name}
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
                    defaultValue= {product.priceMin}
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
                    className="form-control"
                    defaultValue= {product.image1}
                    id="quantity"
                    {...register('image1', { required: true })} />
                {errors.image1 && <div id="emailHelp" className="form-text text-danger">Không được để trống hình ảnh.</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Hình ảnh 2</label>
                <input
                    type="text"
                    style={{width: 700}}
                    defaultValue= {product.image2}
                    className="form-control"
                    id="quantity"
                    {...register('image2', { required: true })} />
                {errors.image2 && <div id="emailHelp" className="form-text text-danger">Không được để trống hình ảnh.</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Hình ảnh 3</label>
                <input
                    type="text"
                    className="form-control"
                    defaultValue= {product.image3}
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
                    defaultValue= {product.soLuong}
                    style={{width: 700}}
                    id="quantity"
                    {...register('soLuong', { required: true })} />
                {errors.soLuong && <div id="emailHelp" className="form-text text-danger">Không được để trống số lượng sản phẩm.</div>}
            </div>
            <button type="submit" className="btn btn-primary" style={{marginBottom: 50}}>Cập nhật</button>
        </form>
    )
}

export default EditProduct
