import { Card, Col, Pagination, Row } from 'react-bootstrap';
import Link from 'next/link'
import apiDeputados from '../services/apiDeputados';
import Pagina from '../components/Pagina';
import { useState } from 'react';

export default function Home({ Deputados }) {

  console.log(Deputados)

  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 48;
  const totalPages = Math.ceil(Deputados.length / resultsPerPage);

  const paginate = page => setCurrentPage(Math.min(Math.max(page, 1), totalPages));

  const currentResults = Deputados.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );
  return (
    <>
      <Pagina titulo='Deputados'>

        <Row md={6}>
          {currentResults.map(item => (
            <Col key={item.id} className='mb-4'>
              <Card>
                <Link href={'/' + item.id}>
                  <Card.Img variant="top" src={item.urlFoto} />
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
        <div className='d-flex justify-content-center'>
          <Pagination>
            <Pagination.First onClick={() => paginate(1)} />
            <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
            {[...Array(totalPages)].map((_, i) => (
              <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)}>{i + 1}</Pagination.Item>
            ))}
            <Pagination.Next onClick={() => paginate(currentPage + 1)} />
            <Pagination.Last onClick={() => paginate(totalPages)} />
          </Pagination>
        </div>
      </Pagina>
    </>
  )
}

export async function getServerSideProps(context) {
  const Fotos = await apiDeputados.get('/deputados?ordem=ASC&ordenarPor=nome')
  const Deputados = Fotos.data.dados

  return {
    props: { Deputados }, // will be passed to the page component as props
  }
}