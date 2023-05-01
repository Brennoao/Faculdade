import React, { useEffect, useState } from 'react'
import Pagina from '../../../components/Pagina'
import Link from 'next/link'
import apiFilmes from '../../../services/apiFilmes'
import { Card, Col, Row } from 'react-bootstrap';

const index = ({filmes}) => {
  // const [genero, setGenero] = useState([])

  // useEffect(() => {
  //   apiFilmes.get('/genre/movie/list').then(resultado => {
  //     setGenero(resultado.data.genres)
  //     console.log(resultado.data.genres)
  //   })
  // }, [])

  // const getGenresNames = (genreIds) => {
  //   const genreNames = genreIds.map(genreId => {
  //     const genre = genero.find(genre => genre.id === genreId);
  //     return genre ? genre.name : '';
  //   });
  //   return genreNames;
  // };

  // {Carro[2].modelo}



  console.log(filmes)
  return (
    <Pagina titulo="Filmes">
      <Row md={4}>
        {filmes.map(item => (
          <Col title={item.title} key={item.id}>
            <Card className='mb-4 shadow-sm bg-dark text-light border-primary border border-3 rounded rounded-4'>
              <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>

                {/* <ListGroup>Gênero:
                  {getGenresNames(item.genre_ids).map(genreName => (
                    <ListGroup.Item key={genreName}>{genreName}</ListGroup.Item>
                  ))}
                </ListGroup> */}

                <Link href={"/movies/filmes/" + item.id} class="btn btn-primary mt-2">Entrar</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina >
  )
}

export default index

export async function getServerSideProps(context) {
  
  const resultado = await apiFilmes.get('/movie/popular')
  const filmes = resultado.data.results
  console.log(filmes)

  return {
    props: {filmes}, // will be passed to the page component as props
  }
}

//.map(item => (item.name + ", "))