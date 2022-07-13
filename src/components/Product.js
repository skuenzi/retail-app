import { StyledProduct } from "./styles/Product.styled";

export default function Product({name, image, price}) {
  return (
    <StyledProduct>
      <h3 className="product-name">{`${name.substr(0, 70)}...`}</h3>
      <img alt={name} src={image} className='product-image'/>
      <p className="product-price">{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD' }).format(price)}</p>
    </StyledProduct>
  );
}
