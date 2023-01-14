import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
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

                        <Nav.Link onClick={() => { navigateScreen("/modules") }}>Modules</Nav.Link>
                        <Nav.Link onClick={() => { navigateScreen("/contact") }}>Contact</Nav.Link>
                        {/* <Nav.Link href="#">Fee</Nav.Link> */}
                        <Nav.Link onClick={() => { navigateScreen("/faqs") }}>FAQs</Nav.Link>
                    </Nav>
                    <Nav>

                        {/* <Nav.Link onClick={() => { navigateScreen("/register") }}>Register</Nav.Link> */}



                        <NavDropdown title="Register" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => { navigateScreen("/register") }}>Team</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => { navigateScreen("/brand-ambassador") }}>
                                Brand Ambasssador
                            </NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            {/* 
                            <NavDropdown.Item onClick={() => { navigateScreen("/fee") }}>
                                Fee Structure
                            </NavDropdown.Item> */}
                        </NavDropdown>
                        <Nav.Link></Nav.Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;