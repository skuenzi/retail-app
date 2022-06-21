

import React, { useEffect } from 'react'

const Products = () => {


    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bdb6a7a06emsh71933c8f898c3afp1aa4c3jsn5b85ee1f5c34',
                'X-RapidAPI-Host': 'real-store.p.rapidapi.com'
            }
        };
        
        fetch('https://real-store.p.rapidapi.com/search/rock%20climbing', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }, [])


    return (
        <div>Products</div>
    )
}

export default Products