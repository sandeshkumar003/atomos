import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link as RouteLink, useNavigate } from "react-router-dom";
function NavbarComponent() {

    const navigate = useNavigate();
    const navigateScreen = (path) => {
        navigate(path);
    }



    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">



                        {/* <Nav.Link>
                            <RouteLink to="/">Home</RouteLink>
                        </Nav.Link>

                        <Nav.Link>

                            <RouteLink to="/about">About</RouteLink>
                        </Nav.Link> */}


                        <Nav.Link onClick={() => { navigateScreen("/") }}>Home</Nav.Link>
                        <Nav.Link onClick={() => { navigateScreen("/about") }}>About</Nav.Link>

                        <Nav.Link onClick={() => { navigateScreen("/contact") }}>Contact</Nav.Link>
                        {/* <Nav.Link href="#">Fee</Nav.Link> */}
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#deets">Register</Nav.Link> */}

                        <Nav.Link onClick={() => { navigateScreen("/register") }}>Register</Nav.Link>
                        {/* <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;