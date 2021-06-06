import React from 'react'
import GianHang from '../component/web/Product/GianHang'
import { useEffect, useState } from 'react';
import aoThunApi from '../api/aoThunApi';

const AoThunProduct = (props) => {
    const [aoThun, setAoThun] = useState([]);
    const [page, setPage] = useState([]);
    const [filter, setFilter] = useState([0, 0]);

    useEffect(() => {
        const getAoThun = async () => {
            setPage(1)
            const { data } = await aoThunApi.getToPage(page)
            setAoThun(data);
        }
        getAoThun();
    }, [])

    const resertPage = (key) => {
        setPage(1)
        loc(key, 'pre')
    }

    const loc = (key, loai) => {
        if (filter[1] == 0) {
            console.log('loc 1');
            if (key == 'none' && loai == 'pre') {
                prePage()
            }
            if (key == 'none' && loai == 'next') {
                nextPage()
            }
            if (key == 'asc' && loai == 'pre') {
                prePageOrSoft(key)
            }
            if (key == 'asc' && loai == 'next') {
                nextPageOrSoft(key)
            }
            if (key == 'desc' && loai == 'pre') {
                prePageOrSoft(key)
            }
            if (key == 'desc' && loai == 'next') {
                nextPageOrSoft(key)
            }
        } else if (filter[1] != 0 && key == 'none') {
            console.log('loc 2');
            if (loai == 'pre') {
                prePageAndFill();
            } else if (loai == 'next') {
                nextPageAndFill()
            }
        } else if (filter[1] != 0 && key != 'none') {
            console.log('loc 3');
            if (key == 'asc' && loai == 'pre') {
                prePageAndFillAndSort(key, filter[0], filter[1])
            }
            if (key == 'asc' && loai == 'next') {
                nextPageAndFillAndSort(key, filter[0], filter[1])
            }
            if (key == 'desc' && loai == 'pre') {
                prePageAndFillAndSort(key, filter[0], filter[1])
            }
            if (key == 'desc' && loai == 'next') {
                nextPageAndFillAndSort(key, filter[0], filter[1])
            }
        }
    }

    const nextPageAndFillAndSort = async (key, min, max) => {
        if (page + 1 > props.maxPage) {
        } else {
            console.log(filter[0], filter[1]);
            const { data } = await aoThunApi.getToFillAndSortAnhPage(min, max, key, page + 1)
            setAoThun(data)
        }
        if (page >= props.maxPage - 1) {
            setPage(props.maxPage)
        } else {
            setPage(page + 1)
        }
    }

    const prePageAndFillAndSort = async (key, min, max) => {
        console.log(filter);
        const { data } = await aoThunApi.getToFillAndSortAnhPage(min, max, key, page - 1)
        setAoThun(data)
        if (page == 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }

    const nextPageAndFill = async () => {
        if (page + 1 > props.maxPageAoThun) {
        } else {
            console.log(filter[0], filter[1]);
            const { data } = await aoThunApi.getByKhoangGiaAndPage(filter[0], filter[1], page + 1);
            setAoThun(data)
        }
        if (page >= props.maxPageAoThun - 1) {
            setPage(props.maxPageAoThun)
        } else {
            setPage(page + 1)
        }
    }

    const prePageAndFill = async () => {
        const { data } = await aoThunApi.getByKhoangGiaAndPage(filter[0], filter[1],page - 1)
        setAoThun(data)
        if (page == 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }

    const nextPageOrSoft = async (key) => {
        if (page + 1 > props.maxPageAoThun) {
        } else {
            const { data } = await aoThunApi.getToPageAndSoft(page + 1, key)
            setAoThun(data)
        }
        if (page >= props.maxPageAoThun - 1) {
            setPage(props.maxPageAoThun)
        } else {
            setPage(page + 1)
        }
    }
    const prePageOrSoft = async (key) => {
        const { data } = await aoThunApi.getToPageAndSoft(page - 1, key)
        setAoThun(data)
        if (page == 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }

    const nextPage = async () => {
        if (page + 1 > props.maxPageAoThun) {
        } else {
            const { data } = await aoThunApi.getToPage(page + 1)
            setAoThun(data)
        }
        if (page >= props.maxPageAoThun - 1) {
            setPage(props.maxPageAoThun)
        } else {
            setPage(page + 1)
        }
    }
    const prePage = async () => {
        const { data } = await aoThunApi.getToPage(page - 1)
        setAoThun(data)
        if (page == 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }

    const filByPrice = async (event, key) => {
        setPage(1)
        if (event.target.value == 0) {
            setFilter([0, 0])
            prePageAndFillAndSort(key, 0,50000000)
        } else if (event.target.value == 1) {
            setFilter([0, 500000])
            prePageAndFillAndSort(key, 0,500000)
        } else if (event.target.value == 2) {
            setFilter([500000, 1000000])
            prePageAndFillAndSort(key, 500000,1000000)
        } else if (event.target.value == 3) {
            setFilter([1000000, 1500000])
            prePageAndFillAndSort(key, 1000000,1500000)
        } else if (event.target.value == 4) {
            setFilter([1500000, 50000000])
            prePageAndFillAndSort(key, 1500000,50000000)
        }
    }

    return (
        <GianHang 
            data={aoThun} 
            prePage={prePage} 
            nextPage={nextPage} 
            page={page} loc={loc} 
            resertPage={resertPage} 
            filByPrice={filByPrice}
            title = "ÁO THUN"
            sp = "ao-thun"
            />
    )
}

export default AoThunProduct
