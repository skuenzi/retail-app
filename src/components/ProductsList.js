import React, { useEffect } from 'react'
import { setProducts } from '../store/products';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Product from './Product';
import { StyledProductsList } from './styles/Products.styled';

const ProductsList = () => {


    return (
            <section><Product /></section>
    )
}

export default ProductsList