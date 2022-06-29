import { useSelector } from "react-redux"
import { StyledProduct } from "./styles/Product.styled"
import { StyledProducts } from "./styles/Products.styled"

export default function Product (second) {
    const products = useSelector(state => state.products)
    const productList = products.map(product => {
        const { name, image, price } = product

        return (
            <StyledProduct>
                <h3>{`${name.substr(0, 70)}...`}</h3>
                <img alt={name} src={image}/>
            </StyledProduct>
        )
    })

    return <StyledProducts>{productList}</StyledProducts>;
}