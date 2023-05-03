import { Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link'
import apiDeputados from '../services/apiDeputados';
import Pagina from '../components/Pagina';

export default function Home({ Ator }) {
  return (
    <>
      <Pagina titulo='Deputados'>

        <Row md={5}>
          {Ator.map(item => (
            <>
              <Col className='mb-4'>
                <Card>
                  <Link href={'/' + item.id}>
                    <Card.Img variant="top" src={item.urlFoto} />
                  </Link>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Pagina>
    </>
  )
}

export async function getServerSideProps(context) {
  const Fotos = await apiDeputados.get('/deputados?ordem=ASC&ordenarPor=nome')
  const Ator = Fotos.data.dados

  return {
    props: { Ator }, // will be passed to the page component as props
  }
}