import axios from 'axios';

const listCartProducts = () => async (dispatch, getState) =>{
    try{
        const user = getState().userLogin.user;
        const {data} = await axios.get('http://localhost:8080/api/cart/'+ user._id,
            {headers: {Authorization: 'Bearer ' + user.token}});
        dispatch({type: 'CARTPRODUCT_LIST_SUCCESS', payload: data.cartProducts});
    }
    catch(error){}
}

const addToCart = (product) => async (dispatch, getState) =>{
    try{
        const user = getState().userLogin.user;
        const cartProducts = getState().cart.cartProducts;
        const cartProduct = cartProducts.find(cartProduct => cartProduct._id === product._id);
        if(cartProduct){
            updateCartServer(cartProduct._id, cartProduct.quantity + 1, user);
            dispatch({type: 'CART_ADD_PRODUCT', payload: cartProduct});
        }
        else{
            updateCartServer(product._id, 1, user);
            dispatch({type: 'CART_ADD_PRODUCT', payload: product});
        }
    }
    catch(error){}
}

const removeFromCart = (id, quantity) => async (dispatch, getState) =>{
    try{
        const user = getState().userLogin.user;
        updateCartServer(id, quantity - 1, user);
        dispatch({type: 'CART_REMOVE_PRODUCT', payload: {id, quantity}});
    }
    catch(error){}
}

const emptyCart = () => async (dispatch, getState) =>{
    try{
        const user = getState().userLogin.user;
        await axios.patch('http://localhost:8080/api/cart/' + user._id,
            {emptyCart : true}, {headers: {Authorization: 'Bearer ' + user.token}});
        dispatch({type: 'EMPTY_CART'});
    }
    catch(error){}
}

async function updateCartServer(id, updatedQuantity, user){
    await axios.patch('http://localhost:8080/api/cart/' + user._id,
        {productId : id, quantity: updatedQuantity}, {headers: {Authorization: 'Bearer ' + user.token}});
}

export {listCartProducts, addToCart, removeFromCart, emptyCart}