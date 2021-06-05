import React from 'react'
import sanPhamApi from '../api/sanPhamApi';
import { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom'


const ProductRelated = (props) => {
    let history = useHistory()
    const [productRelated, setProductRelated] = useState([
        {
            image1: ""
        },
        {
            image1: ""
        }
    ]);

    useEffect(() => {
        const getProductRelated = async () => {
            const { data } = await sanPhamApi.getProductRelated(props.sp, document.getElementsByName('nameProduct')[0].innerHTML.substring(0, 3))
            console.log(data);
            setProductRelated(data)
        }
        getProductRelated();
    }, [])

    return (
        <div>
            <div className="boxrela">
                <Link to={`/${props.sp}/${productRelated[0].id}`}>
                    <div className="card" style={{ textAlign: 'center' }}>
                        <img src={productRelated[0].image1} alt />
                        <div className="name"><b>{productRelated[0].name}</b></div>
                        <div className="price">{productRelated[0].price}</div>
                    </div>
                </Link>
            </div>
            <div className="boxrela">
                <Link to={`/${props.sp}/${productRelated[1].id}`}>
                    <div className="card" style={{ textAlign: 'center' }}>
                        <img src={productRelated[1].image1} alt />
                        <div className="name"><b>{productRelated[1].name}</b></div>
                        <div className="price">{productRelated[1].price}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProductRelated
