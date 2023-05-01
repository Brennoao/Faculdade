import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pagina from '../../../components/Pagina'
import apiFilmes from '../../../services/apiFilmes'

const index = ({ seriesPopular }) => {
    console.log(seriesPopular)
    return (
        <Pagina titulo="Series">
            <Row md={4}>
                {seriesPopular.map(item => (
                    <Col title={item.title} key={item.id}>
                        <Card className='mb-4 shadow-sm bg-dark text-light border-primary border border-3 rounded rounded-4'>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Link href={"/series/idInfo/" + item.id} class="btn btn-primary mt-2">Entrar</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/tv/popular')
    const seriesPopular = resultado.data.results

    return {
        props: { seriesPopular }, // will be passed to the page component as props
    }
}