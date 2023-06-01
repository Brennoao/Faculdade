import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Pagina = (props) => {
    return (
        <>
            <Navbar bg="danger" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>

                    <Nav className="me-auto">
                        <NavDropdown title="Acadêmico" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/cursos">Cursos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/disciplinas">disciplinas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/alunos">alunos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/professores">professores</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/salas">salas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/semestres">semestre</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

            <div className='bg-primary py-1 text-light text-center mb-4'>
                <Container>
                    <h1>{props.titulo}</h1>
                </Container>
            </div>

            <Container className='my-2'>
                {props.children}
            </Container>

            <div style={{ width: '100%' }} className='bg-danger w-100 bottom-0 p-3 text-light text-center'>
                <p>Todos os direitos reservados</p>
            </div>

        </>
    )
}

export default Pagina