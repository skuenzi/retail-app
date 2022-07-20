import styled from "styled-components";

// blue: 150050, dark purple: 3F0071, light purple: 610094


export const StyledProductCard = styled.article`
  display: grid;
  grid-template-areas:
    "image"
    "name"
    "price";
  img {
    max-width: 200px;
    grid-area: image;
    justify-self: center;
  }
  .product-name {
    grid-area: name;
  }
  .product-price {
    grid-area: price;
    
  }
`;