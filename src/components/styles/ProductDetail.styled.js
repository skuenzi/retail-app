import styled from 'styled-components'


export const StyledProductDetail = styled.div`
    max-width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-areas: 
        'title price'
        'image image'
        'rating reviews';

    h2 {
        grid-area: title;
    }
    .product-price {
        grid-area: price;
    }

    img{
        max-width: 700px;
        height: auto;
        grid-area: image;
    }

    .ratings {
        grid-area: rating
    }


`