import { StyledProductCard } from "./styles/ProductCard.styled";

export default function ProductCard({name, image, price}) {
  return (
    <StyledProductCard>
      <h3 className="product-name">{`${name.substr(0, 70)}...`}</h3>
      <img alt={name} src={image} className='product-image'/>
      <p className="product-price">{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD' }).format(price)}</p>
    </StyledProductCard>
  );
}
