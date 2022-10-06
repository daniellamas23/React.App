import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import CartWidget from "./CartWidget/CartWidget";
import './NavBar.css'
import { Link } from "react-router-dom";


const NavBar = (props) => {

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
         
                <Navbar.Brand  as={Link} to='/'>
                    PowerGamer
                </Navbar.Brand>
               
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/category/pc">Equipos</Nav.Link>
                    <Nav.Link as={Link} to="/category/cpu">Procesadores</Nav.Link>
                    <Nav.Link as={Link} to="/category/accesorios">Accesorios</Nav.Link>
                </Nav>
                
                <CartWidget/>
                

            </Container>
        </Navbar>
    )
}

export default NavBar;