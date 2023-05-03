import React from 'react'
import Pagina from '../components/Pagina'
import apiDeputados from '../services/apiDeputados'
import { Card, Col, Row, Table } from 'react-bootstrap'

const idDeputado = ({ Deputado }) => {
    console.log(Deputado)
    return (
        <Pagina>
            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src={Deputado.ultimoStatus.urlFoto} />
                        <Card.Body>
                            <Card.Title>{Deputado.ultimoStatus.nome}</Card.Title>
                            <Card.Text>partido: {Deputado.ultimoStatus.siglaPartido}</Card.Text>
                            <Card.Text>UF: {Deputado.ultimoStatus.siglaUf}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Table striped>
                        <thead>
                            <tr>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>

                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>

                            <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Pagina>
    )
}

export default idDeputado

export async function getServerSideProps(context) {
    const id = context.params.id

    // ID DO ATOR(A)

    const resultado = await apiDeputados.get('/deputados/' + id)
    const Deputado = resultado.data.dados

    return {
        props: { Deputado }, // will be passed to the page component as props
    }
}
{/* <img src={Deputado.ultimoStatus.urlFoto}></img> */ }