import React from 'react'
import GianHang from '../component/web/Product/GianHang'
import { useEffect, useState } from 'react';
import newsAPI from '../api/aoKhoacApi';

const AoKhoacProduct = (props) => {
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
        if (page >= 4) {
            setPage(5)
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
    return (
        <GianHang data = {aoKhoac} prePage={prePage} nextPage={nextPage} page = {page}/>
    )
}

export default AoKhoacProduct
