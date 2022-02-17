import {createStore, combineReducers, applyMiddleware} from 'redux';
import {userRegistrationReducer, userLoginReducer} from './reducers/userReducers';
import thunk from 'redux-thunk';
import {productListReducer} from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import {orderCreateReducer} from './reducers/orderReducers';

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
const initialState = {
    userLogin: {user},
}
const reducer = combineReducers({
    productList: productListReducer,
    orderCreate: orderCreateReducer,
    userRegistration: userRegistrationReducer,
    userLogin: userLoginReducer,
    cart: cartReducer,
})
const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
)

export default store;