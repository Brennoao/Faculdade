import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pagina from '../../../components/Pagina'
import apiFilmes from '../../../services/apiFilmes'

const index = ({ nowPlaying }) => {
  console.log(nowPlaying)

  return (
    <Pagina titulo="EM CARTAZ">
      <Row md={4}>
        {nowPlaying.map(item => (
          <Col title={item.title} key={item.id}>
            <Card className='mb-4 shadow-sm bg-dark text-light border-primary border border-3 rounded rounded-4'>
              <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Link href={"/movies/filmes/" + item.id} class="btn btn-primary mt-2">Entrar</Link>
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

  const resultado = await apiFilmes.get('/movie/now_playing/?language=pt-BR')
  const nowPlaying = resultado.data.results

  return {
    props: { nowPlaying }, // will be passed to the page component as props
  }
}