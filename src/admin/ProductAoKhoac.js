import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import newsAPI from '../api/aoKhoacApi';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import React from 'react'
import Product from './Product';
import AddProduct from './Add';
import axios from 'axios';
import EditProduct from './Edit'
import Header from '../component/admin/Header';


const ProductAoKhoac = (props) => {
    const [aoKhoac, setAoKhoac] = useState([]);
    const [page, setPage] = useState([]);
    const [search, setSearch] = useState('');


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

    const nextPageAndSearch = async () => {
        if (page + 1 > props.maxPage) {
        } else {
            const { data } = await newsAPI.getToSearchAndPage(search, page + 1)
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

    const prePageAndSearch = async () => {
        const { data } = await newsAPI.getToSearchAndPage(search, page - 1)
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
    }

    const onUpdate = async (dataNew) => {
        console.log(dataNew);
        try {
            if (window.confirm('Bạn có chắc muốn thay đổi?')) {
                let res = await newsAPI.update(dataNew.id, dataNew)
                prePage()
            }
        } catch (error) {
            console.log(error)
            alert('lỗi cmnr')
        }
    }

    const onDelete = async (index) => {
        if (window.confirm('Bạn có chắc muốn xóa không?')) {
            try {
                let res = await newsAPI.remove(index);
                const { data } = await newsAPI.getToPage(page)
                setAoKhoac(data);
            } catch (error) {
                alert('Lỗi cmnr')
            }
        }
    }

    const locPre = () => {
        console.log(search);
        if (search.trim().length == 0) {
            prePage()
        } else {
            prePageAndSearch();
        }
    }

    const locNext = () => {
        console.log(search);
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
            const { data } = await newsAPI.getToSearchAndPage(event.target.value, 1)
            setAoKhoac(data)
        }
    }

    return (
        <BrowserRouter>
            <Header onSearch={onSearch} {...props}/>
            <Switch>
                <Route exact path="/admin/product/ao-khoac">
                    <Product product={aoKhoac} prePage={prePage} nextPage={nextPage} page={page} urlP="ao-khoac" onDelete={onDelete} locPre={locPre} locNext={locNext} />
                </Route>
                <Route exact path="/admin/product/ao-khoac/add">
                    <AddProduct urlP="ao-khoac" loai={"Áo khoác"} onAdd={onAdd} />
                </Route>
                <Route exact path="/admin/product/:sp/:id">
                    <EditProduct onUpdate={onUpdate} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default ProductAoKhoac





