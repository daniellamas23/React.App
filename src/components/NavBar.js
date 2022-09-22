import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './NavBar.css'


const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>
                    PowerGamer
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#pc">Equipos</Nav.Link>
                    <Nav.Link href="#cpu">Procesadores</Nav.Link>
                    <Nav.Link href="#acc">Accesorios</Nav.Link>
                </Nav>
                <CartWidget/>


            </Container>
        </Navbar>
    )
}

export default NavBar;