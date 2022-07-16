import { StyledHeader } from "./styles/Header.styled"
import {FaShoppingCart} from 'react-icons/fa'

const Header = () => {
    return (
        <StyledHeader>
            <h1>
                the climb shop
            </h1>
            <FaShoppingCart className="cart-icon"/>
        </StyledHeader>
    )
}

export default Header