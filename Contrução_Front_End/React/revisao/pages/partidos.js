import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pagina from '../components/Pagina'
import apiDeputados from '../services/apiDeputados'

const partidos = ({ Partido }) => {

  console.log(Partido)
  return (
    <Pagina>
      <Row md={7}>
        {Partido.map(item => (
          <Col key={item.id}>
            <Card>
              <Link href={'/infosPartidos/' + item.id}><Card.Img variant="top" src={`https://www.camara.leg.br/internet/Deputado/img/partidos/${item.sigla}.gif`} /></Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  )
}

export default partidos

export async function getServerSideProps(context) {

  // REFERENCIA DEPUTADO ÚNICO
  const resultado = await apiDeputados.get('/partidos/')
  const Partido = resultado.data.dados

  // RETORNA VARIÁVEIS DECLARADAS
  return {
    props: { Partido }, // will be passed to the page component as props
  }
}
