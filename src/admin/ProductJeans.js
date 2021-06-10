import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jeansApi from '../api/jeansApi';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import React from 'react'
import Product from './Product';
import AddProduct from './Add';
import EditProduct from './Edit'
import Header from '../component/admin/Header';


const ProductJeans = (props) => {
    const [jeans, setJeans] = useState([]);
    const [page, setPage] = useState([]);
    const [search, setSearch] = useState('');


    useEffect(() => {
        const getJeans = async () => {
            setPage(1)
            const { data } = await jeansApi.getToPage(page)
            setJeans(data);
        }
        getJeans();
    }, [])
    const nextPage = async () => {
        if (page + 1 > props.maxPage) {
        } else {
            const { data } = await jeansApi.getToPage(page + 1)
            setJeans(data)
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
            const { data } = await jeansApi.getToSearchAndPage(search, page + 1)
            setJeans(data)
        }
        if (page >= props.maxPage - 1) {
            setPage(props.maxPage)
        } else {
            setPage(page + 1)
        }
    }
    const prePage = async () => {
        const { data } = await jeansApi.getToPage(page - 1)
        setJeans(data)
        if (page == 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }

    const prePageAndSearch = async () => {
        const { data } = await jeansApi.getToSearchAndPage(search, page - 1)
        setJeans(data)
        if (page == 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }

    const onAdd = async (product) => {
        try {
            let res = await jeansApi.add(product)
        } catch (error) {
            console.log(error)
            alert('lỗi cmnr')
        }
    }

    const onUpdate = async (dataNew) => {
        console.log(dataNew);
        try {
            if (window.confirm('Bạn có chắc muốn thay đổi?')) {
                let res = await jeansApi.update(dataNew.id, dataNew)
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
                let res = await jeansApi.remove(index);
                const { data } = await jeansApi.getToPage(page)
                setJeans(data);
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
            const { data } = await jeansApi.getToSearchAndPage(event.target.value, 1)
            setJeans(data)
        }
    }

    return (
        <BrowserRouter>
            <Header onSearch={onSearch} {...props} pla ={'Tìm theo tên sản phẩm...'}/>
            <Switch>
                <Route exact path="/admin/product/jeans">
                    <Product tenSp = {'Jeans'} product={jeans} prePage={prePage} nextPage={nextPage} page={page} urlP="jeans" onDelete={onDelete} locPre={locPre} locNext={locNext} />
                </Route>
                <Route exact path="/admin/product/jeans/add">
                    <AddProduct urlP="jeans" loai={"Jeans"} onAdd={onAdd} />
                </Route>
                <Route exact path="/admin/product/:sp/:id">
                    <EditProduct onUpdate={onUpdate} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default ProductJeans





