import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiArtinstituteChicagoAPI from '../../services/apiArtinstituteChicagoAPI'

const index = ({ id }) => {

  console.log(id)
  return (
    <Pagina titulo="Imagem">
    <Row md={12}>
      <Col>
        <Card className=''>
          <Card.Img variant="top" src={"https://www.artic.edu/iiif/2/" + id + "/full/843,/0/default.jpg"} />
        </Card>
      </Col>
    </Row>
    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {
  const id = context.params.id

  return {
    props: { id }, // will be passed to the page component as props
  }
}