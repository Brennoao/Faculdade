import React, { useState } from 'react'
import { Button, Modal, Offcanvas } from 'react-bootstrap'
import Align from './Contrução_Front_End/Avaliações/restaurante/components/Align'
import Show from './Contrução_Front_End/Avaliações/restaurante/components/Show'
// import Show from '../components/Show'
import apiRestaurante from './Contrução_Front_End/Avaliações/restaurante/services/apiRestaurante'

const index = ({ pullRestaurante }) => {

  const { show, handleClose, handleShow } = Show()
  

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  
  console.log(pullRestaurante)
  return (
    <Align>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Align>
  )
}

export default index

export async function getServerSideProps(context) {

  const resultado = await apiRestaurante.get('/Restaurante')
  const pullRestaurante = resultado.data

  return {
    props: { pullRestaurante }, // will be passed to the page component as props
  }
}