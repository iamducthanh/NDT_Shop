import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import newsAPI from '../api/aoKhoacApi';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import React from 'react'
import Product from './Product';
import AddProduct from './Add';
import axios from 'axios';


const ProductAoKhoac = (props) => {
    const [aoKhoac, setAoKhoac] = useState([]);
    const [page, setPage] = useState([]);
    useEffect(() => {
        const getAoKhoac = async () => {
            setPage(1)
            const { data } = await newsAPI.getToPage(page)
            setAoKhoac(data);
        }
        getAoKhoac();
    }, [])
    const nextPage = async () => {
        if (page + 1 > props.maxPage) {
        } else {
            const { data } = await newsAPI.getToPage(page + 1)
            setAoKhoac(data)
        }
        if (page >= props.maxPage - 1) {
            setPage(props.maxPage)
        } else {
            setPage(page + 1)
        }
    }
    const prePage = async () => {
        const { data } = await newsAPI.getToPage(page - 1)
        setAoKhoac(data)
        if (page == 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }

    const onAdd = async (product) => {
        try {
            let res = await newsAPI.add(product)
        } catch (error) {
            console.log(error)
            alert('lỗi cmnr')
        }
        // await fetch('http://localhost:3005/aokhoac', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(product)
        // });
        // setAoKhoac([
        //   ...aoKhoac,
        //   product
        // ]);
    }

    const onDelete = async (index) => {
        if(window.confirm('Bạn có chắc muốn xóa không?')){
            try {
                let res = await newsAPI.remove(index);
                const { data } = await newsAPI.getToPage(page)
                setAoKhoac(data);
            } catch (error) {
                alert('Lỗi cmnr')
            }
        }
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/admin/product/ao-khoac">
                    <Product product={aoKhoac} prePage={prePage} nextPage={nextPage} page={page} urlP="ao-khoac" onDelete = {onDelete}/>
                </Route>
                <Route exact path="/admin/product/ao-khoac/add">
                    <AddProduct urlP="ao-khoac" loai={"Áo khoác"} onAdd={onAdd} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default ProductAoKhoac





