import React from 'react'
import Product from './Product';
import { useEffect, useState } from 'react';
import productApi from '../api/productApi';
import { useParams } from 'react-router-dom'

const LocProduct = () => {
    const [sp, setSP] = useState(useParams());

    return (
        <Product sp = {sp}/>
    )
}

export default LocProduct
