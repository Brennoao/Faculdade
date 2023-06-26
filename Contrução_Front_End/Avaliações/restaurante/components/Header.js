import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = (props) => {
    return (
        <>
            <Navbar bg="dark" variant='dark' className='px-5'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Manu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/restaurante">Restaurantes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/fornecedores">Fornecedores</NavDropdown.Item>
                            <NavDropdown.Item href="/funcionarios">Funcionarios</NavDropdown.Item>
                            <NavDropdown.Item href="/mesas">Mesas</NavDropdown.Item>
                            <NavDropdown.Item href="/tipos">Tipos</NavDropdown.Item>
                            <NavDropdown.Item href="/pedidos">Pedidos</NavDropdown.Item>
                            <NavDropdown.Item href="/produtos">Produtos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className='px-5 mb-5 d-flex justify-content-center bg-secondary'>
                <h3 className='text-light'>{props.Title}</h3>
            </div>

        </>
    )
}

export default Header