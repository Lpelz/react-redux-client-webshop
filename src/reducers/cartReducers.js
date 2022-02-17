function cartReducer(state = {cartProducts : []}, action){
    switch(action.type){
        case 'CARTPRODUCT_LIST_SUCCESS':
            return {cartProducts: action.payload.map(cartProduct => { 
                return {...cartProduct.product, quantity: cartProduct.quantity}
            })};
        case 'CART_ADD_PRODUCT':
            if (action.payload.quantity){
                return {cartProducts: updateQuantity(state.cartProducts, action.payload._id, action.payload.quantity + 1)};
            }
            return {cartProducts: [...state.cartProducts, {...action.payload, quantity: 1}]}
        case 'CART_REMOVE_PRODUCT':
            if(action.payload.quantity === 1){
                return {cartProducts: state.cartProducts.filter(cartProduct => cartProduct._id !== action.payload.id)};
            }
            for(const cartProduct of state.cartProducts){
                if(cartProduct._id === action.payload.id){
                    return {cartProducts: updateQuantity(state.cartProducts, action.payload.id, cartProduct.quantity - 1)};
                }
            }
            return state;
        case 'EMPTY_CART':
            return {cartProducts : []}
        default: return state;
    }
}

function updateQuantity(cartProducts, id, updatedQuantity){
    return cartProducts.map(cartProduct => id === cartProduct._id ?
        {...cartProduct, quantity: updatedQuantity} : cartProduct);
}

export{cartReducer}