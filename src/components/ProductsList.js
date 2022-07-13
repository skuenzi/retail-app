import React from 'react'
import { useSelector } from 'react-redux';
import Product from './Product';
import { StyledProductsList } from './styles/ProductsList.styled';

const ProductsList = () => {
    const products = useSelector(state => state.products)
    const productList = products.map(product => {

        return (
            <Product key={product.id} {...product}/>
        )
    })


    return (
            <StyledProductsList>{productList}</StyledProductsList>
    )
}

export default ProductsList