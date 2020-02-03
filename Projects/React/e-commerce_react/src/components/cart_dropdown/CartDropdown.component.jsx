import React from 'react'
import './cart-dropdown.style.scss'
import { CustomButton } from '../custom_button/CustomButton.component'
import { connect } from 'react-redux'
import CartItem from '../cart_item/CartItem.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'


function CartDropdown({cartItems}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
            </div>
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = (state)=>({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);