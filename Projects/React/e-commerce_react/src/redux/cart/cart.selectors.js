import { createSelector } from "reselect";


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumualetdQuentity,cartItem)=>
        accumualetdQuentity + cartItem.quantity,0
    )
);

