import { Navbar, Nav, Container } from 'tailwindcss'
import { LinkContainer } from 'tailwindcss'
import '../../styles/tailwind.css'

export default function Navigation({ links }) {
    return (
        <Navbar
            variant="dark"
            expand="md"
            collapseOnSelect
            className="fixed-top p-4"
        >
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <span className='h3'>Tyler Knapp</span>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar=-nav">
                    <Nav className="ms-auto">
                        {links.map((link, i) => (
                            <LinkContainer key={i} to={link.path}>
                                <Nav.Link>{link.title}</Nav.Link>
                            </LinkContainer>
                        ))}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}