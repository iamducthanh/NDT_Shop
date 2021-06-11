import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import aoThunApi from '../api/aoThunApi';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import Product from './Product';
import AddProduct from './Add';
import EditProduct from './Edit'
import Header from '../component/admin/Header';
import productApi from '../api/productApi';

const QuanLiProduct = (props) => {
    let { sp } = useParams()
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState([]);
    const [search, setSearch] = useState('');

    console.log(sp);
    useEffect(() => {
        getProduct();
    }, [sp])

    const getProduct = async () => {
        setPage(1)
        const { data } = await productApi.getToPage(sp, page)
        console.log(data);
        setProduct(data);
    }
    const nextPage = async () => {
        if (page + 1 > props.maxPage) {
        } else {
            const { data } = await productApi.getToPage(sp, page + 1)
            setProduct(data)
        }
        if (page >= props.maxPage - 1) {
            setPage(props.maxPage)
        } else {
            setPage(page + 1)
        }
    }

    const nextPageAndSearch = async () => {
        if (page + 1 > props.maxPage) {
        } else {
            const { data } = await productApi.getToSearchAndPage(sp, search, page + 1)
            setProduct(data)
        }
        if (page >= props.maxPage - 1) {
            setPage(props.maxPage)
        } else {
            setPage(page + 1)
        }
    }
    const prePage = async () => {
        const { data } = await productApi.getToPage(sp, page - 1)
        setProduct(data)
        if (page == 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }

    const prePageAndSearch = async () => {
        const { data } = await productApi.getToSearchAndPage(sp, search, page - 1)
        setProduct(data)
        if (page == 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }

    const onDelete = async (index) => {
        if (window.confirm('Bạn có chắc muốn xóa không?')) {
            try {
                let res = await productApi.remove(index);
                const { data } = await productApi.getToPage(page)
                setProduct(data);
            } catch (error) {
                alert('Lỗi cmnr')
            }
        }
    }

    const locPre = () => {
        if (search.trim().length == 0) {
            prePage()
        } else {
            prePageAndSearch();
        }
    }

    const locNext = () => {
        if (search.trim().length == 0) {
            nextPage()
        } else {
            nextPageAndSearch();
        }
    }

    const onSearch = async (event) => {
        if (event.target.value.trim().length == 0) {
            setPage(2)
            prePage()
        } else {
            setSearch(event.target.value)
            setPage(1)
            const { data } = await productApi.getToSearchAndPage(sp,event.target.value, 1)
            setProduct(data)
        }
    }
    return (
        <div><Header onSearch={onSearch} {...props} pla={'Tìm theo tên sản phẩm...'} />
            <div className="d-flex justify-content-between flex-md-nowrap align-items-center mb-3">
                <h2 className="h2">{sp}</h2>
                <Link to={`/admin/product/${sp}/add`} className="btn btn-primary">Thêm sản phẩm</Link>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Ảnh</th>
                            <th>Số lượng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((sanPham, index) => (
                            <tr>
                                <td>{index + 1 + (8 * (props.page - 1))}</td>
                                <td>{sanPham.name}</td>
                                <td>{Number(sanPham.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                <td>
                                    <img src={sanPham.image1} style={{ with: 50 }, { height: 50 }}></img>
                                    <img src={sanPham.image2} style={{ with: 50 }, { height: 50 }}></img>
                                    <img src={sanPham.image3} style={{ with: 50 }, { height: 50 }}></img>
                                </td>

                                <td>{sanPham.soLuong}</td>
                                <th>
                                    <Link to={`/admin/product/ao-khoac/${sanPham.id}`} className="btn btn-primary">Edit</Link>
                                    <button className="btn btn-danger" onClick={onDelete.bind(this, sanPham.id)}>Xóa</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ display: 'flex' }}>
                <button className="ptButton" name="page" onClick={locPre}>
                    <i className="fa fa-angle-double-left" />
                </button>
                <div typeof="text" className="ptNumber" style={{ backgroundColor: 'red', borderRadius: 2, boxShadow: '0 1px 4px black' }}>{page}</div>
                <button className="ptButton" name="" onClick={locNext}><i className="fa fa-angle-double-right" /></button>
            </div>
        </div>
        // <BrowserRouter>
        //     <Header onSearch={onSearch} {...props} pla={'Tìm theo tên sản phẩm...'} />
        //     <Switch>
        //         <Route exact path={`/admin/product/${sp}`}>
        //             <Product tenSp={'Sản phẩm'} product={product} prePage={prePage} nextPage={nextPage} page={page} urlP={sp} onDelete={onDelete} locPre={locPre} locNext={locNext} />
        //         </Route>
        //         <Route exact path={`/admin/product/${sp}/add`}>
        //             <AddProduct urlP={sp} loai={"Sản phẩm"} onAdd={onAdd} />
        //         </Route>
        //         <Route exact path={`/admin/product/:sp/:id`}>
        //             <EditProduct onUpdate={onUpdate} />
        //         </Route>
        //     </Switch>
        // </BrowserRouter>
    )
}

export default QuanLiProduct
