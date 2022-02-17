import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Card, Form, Button} from 'react-bootstrap'
import {login} from '../actions/userActions';
import {useNavigate} from 'react-router-dom';

function Login() {
    const [inputs, setInputs] = useState({username : '', password: ''});
    const navigate = useNavigate();
    const userLogin = useSelector(state => state.userLogin);
    const {user, error} = userLogin;
    const dispatch = useDispatch();

    useEffect(() => {
        if(user){
            navigate('/');
        }
    }, [user, navigate]);

    const handleSubmit = async e =>{
        e.preventDefault();
        dispatch(login(inputs.username, inputs.password));
    }

    return (
    <div className = "container mt-4">
        <Card>
            <Card.Header className = "text-center">Login</Card.Header>
            <Card.Body>            
                <Form onSubmit = {handleSubmit}>
                    <span>{error}</span>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={e=> setInputs({...inputs, username: e.target.value})} value = {inputs.username} required/>
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
export default Login;