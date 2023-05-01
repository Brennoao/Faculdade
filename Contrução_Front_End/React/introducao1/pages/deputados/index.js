import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiDeputados from '../../services/apiDeputados'

const index = () => {
  const [deputados, setDeputados] = useState([])

  useEffect(() => {
    apiDeputados.get('deputados?itens=20&ordem=ASC&ordenarPor=nome').then(resultado => {
      setDeputados(resultado.data.dados)
      console.log(resultado.data.dados)
    })
  }, [])

  return (
    <Container>
      <Row md={5} className='d-flex justify-content-between align-items-center gap-5'>
        {deputados.map(item => (
          <Card key={item.id} className='d-flex justify-content-between align-items-center p-2'>
            <Card.Img variant="top" src={item.urlFoto} />
            <Card.Body>
              <Card.Title>{item.nome}</Card.Title>
              <Card.Text>E-mail: {item.email}</Card.Text>
              <ListGroup variant="flush" >
                <ListGroup.Item>Uf: {item.siglaUf}</ListGroup.Item>
                <ListGroup.Item>Partido: {item.siglaPartido}</ListGroup.Item>
              </ListGroup>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  )
}

export default index