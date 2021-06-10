import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Product from './Product';


const PhanLoaiSP = (props) => {
    const [loaiSP, setLoaiSP] = useState([]);
    let {sp} = useParams()
    console.log(sp);
    useEffect(() => {
        const getProduct = () => {
            setLoaiSP(sp);
            console.log(sp);
        }
        getProduct();
    }, [])
    return (
        <Product {...props} loaiSP = {loaiSP}/>
    )
}

export default PhanLoaiSP
