import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from '../components/Cabecalho'
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

const array = () => {
    const Carros = [ 'Civic', 'Tucson', 'Celta', 'Tempra', 'Marea', 'Doblo']

    return (
        <>
            <Pagina titulo="Arrays">
                <Container titulo="Arrays">
                    <h1>Lista Carros</h1>
                    <ol>
                        {Carros.map(item => (
                            <li>{item}</li>
                        ))}
                    </ol>

                </Container>
            </Pagina>
        </>
    )
}

export default array            