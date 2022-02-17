import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../actions/userActions'

function NavigationBar() {
  const userLogin = useSelector(state => state.userLogin);
  const {user} = userLogin;
  const dispatch = useDispatch();

  return (
    <div>
        <Navbar bg ="primary" variant="dark">
        <Container>
          <Navbar.Brand href = "/">Shop</Navbar.Brand>
          <Nav className = "me-auto">
            {user ? (
              <Button onClick = {() => dispatch(logout())}>Logout</Button>  
            ):(
              <Nav className = "me-auto">
                <Nav.Link href = "/login">Login</Nav.Link>
                <Nav.Link href = "/registration">Registration</Nav.Link>     
              </Nav>
            )}            
          </Nav>
        </Container>
        </Navbar>
    </div>
  );
}

export default NavigationBar;
