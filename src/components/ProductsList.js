import React from 'react'
import { useSelector } from 'react-redux';
import Product from './Product';
import { StyledProductsList } from './styles/ProductsList.styled';

const ProductsList = () => {
    const products = useSelector(state => state.products)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)

    const productList = products.map(product => {

        return (
            <Product key={product.id} {...product}/>
        )
    })


    return (
        <>
            {loading ? <h2>Loading climbing stuff...</h2> : <StyledProductsList>{productList}</StyledProductsList>}
            {error && <h2>Sorry, there was a problem getting the climbing stuff</h2>}
        </>
    )
}

export default ProductsList