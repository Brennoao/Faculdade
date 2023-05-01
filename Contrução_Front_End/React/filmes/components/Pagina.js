import React from 'react'
import { Container, Navbar, Nav, SplitButton, Dropdown, NavDropdown } from 'react-bootstrap';

const Pagina = (props) => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="/movies/popular">Popular</Nav.Link>
                        <NavDropdown title="Filmes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/movies/emCartaz">Em Cartaz</NavDropdown.Item>
                            <NavDropdown.Item href="/movies/popular">Filmes</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                        </NavDropdown>
                        <NavDropdown title="series" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/series/popular/">Populares</NavDropdown.Item>
                            <NavDropdown.Item href="/series/rated/">Mais Votados</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

            <div className='bg-warning py-3 text-dark text-center mb-4'>
                <Container>
                    <h1>{props.titulo}</h1>
                </Container>
            </div>

            <Container className='my-2'>
                {props.children}
            </Container>

            <div style={{ width: '100%' }} className='bg-warning w-100 bottom-0 p-3 text-dark text-center'>
                <p>Todos os direitos reservados</p>
            </div>

        </>
    )
}

export default Pagina