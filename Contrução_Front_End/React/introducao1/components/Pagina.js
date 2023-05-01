import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from '../components/Cabecalho'
import { Container, Navbar, Nav } from 'react-bootstrap';

const Pagina = (props) => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className='bg-secondary py-3 text-white text-center mb-3'>
                <Container>
                    <h1>{props.titulo}</h1>
                </Container>
            </div>

            <Container className='mb-5'>
                {props.children}
            </Container>

            <div style={{ width: '100%' }} className='bg-secondary position-fixed w-100 bottom-0 p-3 text-white text-center'>
                <p>Todos os direitos reservados</p>
            </div>

        </>
    )
}

export default Pagina