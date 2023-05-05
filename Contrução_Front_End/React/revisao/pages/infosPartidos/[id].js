import React from 'react'
import apiDeputados from '../../services/apiDeputados'
import Pagina from '../../components/Pagina'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

const idPartido = ({ Partido, PMembros }) => {

    console.log(Partido)
    console.log(PMembros)
    return (
        <Pagina titulo={Partido.nome}>
            <Row md={6}>

                {/* INFORMAÇÕES DO PARTIDO */}
                <Col md={3}>
                    <Card className='mb-2'>
                        <Card.Img variant="top" src={Partido.urlLogo} />
                        <Card.Body>
                            <Card.Title>{Partido.nome}</Card.Title>
                            <Card.Title>Situação: {Partido.status.situacao}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

                {/* MEMBROS DOS PARTIDOS */}
                {PMembros.map(item => (
                    <Col key={item.id} className='mb-4'>
                        <Card>
                            <Link href={'/' + item.id}>
                                <Card.Img variant="top" src={item.urlFoto} />
                            </Link>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Pagina>
    )
}

export default idPartido

export async function getServerSideProps(context) {

    // ID DO DEPUTADOS(A)
    const id = context.params.id

    // REFERENCIA DEPUTADO ÚNICO
    const resultado = await apiDeputados.get('/partidos/' + id)
    const Partido = resultado.data.dados

    // MEMBROS DO PARTIDO
    const Membros = await apiDeputados.get('/partidos/' + id + '/membros')
    const PMembros = Membros.data.dados

    // RETORNA VARIÁVEIS DECLARADAS
    return {
        props: { Partido, PMembros }, // will be passed to the page component as props
    }
}