import {Card, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../actions/cartActions';

function CartProduct(props) {
    const dispatch = useDispatch();

    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.cartProduct.name}</Card.Title>
                <Card.Subtitle>Price: {props.cartProduct.price}</Card.Subtitle>
                <Button onClick = {() => {dispatch(addToCart(props.cartProduct))}}>+</Button>
                <span>{props.cartProduct.quantity}</span>
                <Button onClick = {() => {dispatch(removeFromCart(props.cartProduct._id, props.cartProduct.quantity))}}>-</Button>
            </Card.Body>
        </Card>
    );
  }

export default CartProduct;