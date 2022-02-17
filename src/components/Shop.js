import Products from './Products';
import Cart from './Cart';
import {Button, Container, Row, Col} from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux';
import {emptyCart} from '../actions/cartActions';
import {createOrder} from '../actions/orderActions';

function Shop() {
  const cart = useSelector(state => state.cart);
  const {cartProducts} = cart;
  const userLogin = useSelector(state => state.userLogin);
  const {user} = userLogin;
  const dispatch = useDispatch();


  function totalPrice(){
    let total = 0;
    for(const cartProduct of cartProducts){
      total += cartProduct.price * cartProduct.quantity;
    }
    return total;
  }

   function order(totalPrice){
      if(totalPrice > 0){
        dispatch(createOrder({customer: user._id, orderProducts : cartProducts, totalPrice : totalPrice}));
        dispatch(emptyCart());
     }
   }

  return (
    <Container>
      <Row>
       <Col>
        <h3>Products</h3>
        <Products/>
        </Col>
        <Col>
        <h3>Cart</h3>
        {user ?
        <div>
          <Cart/>
          <Button onClick = {() => {dispatch(emptyCart())}}>Empty</Button>
          <span>Total price: {totalPrice()}</span>
          <Button onClick = {() => {order(totalPrice())}}>Order</Button>
        </div>:    
        <p>Login</p>
        }
        </Col>
      </Row>  
    </Container>
  );
}

export default Shop;