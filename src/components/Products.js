import React, { useEffect } from 'react'
import { setProducts } from '../store/products';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Products = () => {

    const products = useSelector(state => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const options = {
            method: 'GET',
            url: 'https://real-store.p.rapidapi.com/search/rock%20climbing',
            headers: {
              'X-RapidAPI-Key': 'bdb6a7a06emsh71933c8f898c3afp1aa4c3jsn5b85ee1f5c34',
              'X-RapidAPI-Host': 'real-store.p.rapidapi.com'
            }
          };


        const response = await axios.request(options).then(function (response) {
            console.log(response.data.results);
            return response.data.results
             
        }).catch(function (error) {
            console.error(error);
        });

        dispatch(setProducts(response))
       
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <div>products</div>
    )
}

export default Products