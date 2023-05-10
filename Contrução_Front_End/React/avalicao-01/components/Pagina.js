import React from 'react'
import { Container, Navbar, Nav, SplitButton, Dropdown, NavDropdown } from 'react-bootstrap';

const Pagina = (props) => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">Obras de Arte</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="/">Obras</Nav.Link>
                        <Nav.Link href="/tipos">Tipos de Arte</Nav.Link>

                        {/* <NavDropdown.Divider /> */}
                    </Nav>
                </Container>
            </Navbar>

            <div className='bg-secondary py-3 text-light text-center mb-4'>
                <Container>
                    <h1>{props.titulo}</h1>
                </Container>
            </div>

            <Container className='my-2 w-100'>
                {props.children}
            </Container>

            <div style={{ width: '100%' }} className='bg-secondary w-100 bottom-0 p-3 text-light text-center'>
                <p>Todos os direitos reservados</p>
            </div>

        </>
    )
}

export default Pagina