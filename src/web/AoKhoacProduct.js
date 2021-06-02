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

    const resertPage = (key) => {
        setPage(1)
        loc(key, 'pre')
    }

    const loc = (key, loai) => {
        if(key == 'none' && loai == 'pre'){
            console.log('pre non');
            prePage()
        }
        if(key == 'none' && loai == 'next'){
            console.log('next non');
            nextPage()
        }
        if(key == 'asc' && loai == 'pre'){
            console.log('pre asc');
            prePageOrSoft(key)
        }
        if(key == 'asc' && loai == 'next'){
            console.log('next asc');
            nextPageOrSoft(key)
        }
        if(key == 'desc' && loai == 'pre'){
            console.log('pre desc');
            prePageOrSoft(key)
        }
        if(key == 'desc' && loai == 'next'){
            console.log('next desc');
            nextPageOrSoft(key)
        }

    }

    const nextPageOrSoft = async (key) => {
        if (page + 1 > props.maxPage) {
        } else {
            const { data } = await newsAPI.getToPageAndSoft(page + 1, key)
            setAoKhoac(data)
        }
        if (page >= 4) {
            setPage(5)
        } else {
            setPage(page + 1)
        }
    }
    const prePageOrSoft = async (key) => {
        const { data } = await newsAPI.getToPageAndSoft(page - 1, key)
        setAoKhoac(data)
        if (page == 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }

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
        <GianHang data = {aoKhoac} prePage={prePage} nextPage={nextPage} page = {page} loc = {loc} resertPage = {resertPage}/>
    )
}

export default AoKhoacProduct
