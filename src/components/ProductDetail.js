import { useSelector } from "react-redux"
import { StyledProductDetail } from "./styles/ProductDetail.styled"

export default function ProductDetail(props) {
    const products = useSelector(state => state.products)

    const { name, image, stars, price, total_reviews } = products[4]
    return (
        <StyledProductDetail>
            <h2>{name}</h2>
            <div className="ratings">{stars}</div>
            <img src={image} alt={name}/>
            <p className="product-price">{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD' }).format(price)}</p>
            <p className="reviews">Read {total_reviews} reviews</p>
        </StyledProductDetail>
    )
}