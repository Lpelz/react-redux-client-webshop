import CartProduct from './CartProduct';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {listCartProducts} from '../actions/cartActions';

function Cart() {
  const cart = useSelector(state => state.cart);
  const {cartProducts} = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCartProducts());
  }, [dispatch]);

  return (  
    <div>
    {cartProducts.map(cartProduct => (
        <CartProduct cartProduct = {cartProduct} key = {cartProduct._id}/>
    ))}
    </div>
  );
}

export default Cart;