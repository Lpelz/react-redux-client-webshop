import {Card, Button} from 'react-bootstrap';
import {addToCart} from '../actions/cartActions';
import {useSelector, useDispatch} from 'react-redux';

function Product(props) {
    const userLogin = useSelector(state => state.userLogin);
    const {user} = userLogin;
    const dispatch = useDispatch();
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.product.name}</Card.Title>
                <Card.Subtitle>Price: {props.product.price}</Card.Subtitle>
                <Card.Text> {props.product.description}</Card.Text>
                {user && <Button onClick = {() => {dispatch(addToCart(props.product))}}>Add</Button>}
            </Card.Body>
        </Card>
    );
  }

export default Product;