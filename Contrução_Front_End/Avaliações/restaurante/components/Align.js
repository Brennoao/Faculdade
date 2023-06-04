import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Align = (props) => {
  return (
    <Container>
        {props.children}
    </Container>
  )
}

export default Align