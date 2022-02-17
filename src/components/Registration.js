import axios from 'axios';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Card, Form, Button} from 'react-bootstrap';
import {registration} from '../actions/userActions';
import {useNavigate} from 'react-router-dom';

function Registration() {
    const [inputs, setInputs] = useState({username : '', email : '', password: ''});
    const userRegistration = useSelector(state => state.userRegistration);
    const {user, error} = userRegistration;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        async function createCart(){
            await axios.post('http://localhost:8080/api/cart', {customer: user._id}); 
        }
        if(user){
            createCart();
            navigate('/');
        }
    }, [user, navigate]);

    const handleSubmit = async e =>{
        e.preventDefault();
        dispatch(registration(inputs.username, inputs.email, inputs.password)); 
    }

    return (
    <div className = "container mt-4">
        <Card>
            <Card.Header className = "text-center">Registration</Card.Header>
            <Card.Body>
                <Form onSubmit = {handleSubmit}>
                    <span>{error}</span>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={e=> setInputs({...inputs, username: e.target.value})} value = {inputs.username} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={e=> setInputs({...inputs, email: e.target.value})} value = {inputs.email} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={e=> setInputs({...inputs, password: e.target.value})} value = {inputs.password} required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
    </div>
    );
}
export default Registration;