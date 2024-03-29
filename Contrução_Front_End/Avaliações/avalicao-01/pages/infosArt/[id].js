import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiArtinstituteChicagoAPI from '../../services/apiArtinstituteChicagoAPI'
import Link from 'next/link'
import { IoArrowBackCircleSharp, IoScanCircleSharp } from 'react-icons/io5'

const infosArt = ({ Info }) => {

    console.log(Info)
    return (
        <Pagina titulo={Info.title}>
            <Row>
                <Col md={4}>
                    <Card border="dark" className='border border-dark'>
                        <Card.Header className='text-center text-light bg-dark'>Foto</Card.Header>
                        <Card.Body >
                            <Card.Img variant="top" src={"https://www.artic.edu/iiif/2/" + Info.image_id + "/full/843,/0/default.jpg"} />
                            <Link href={"/foto/" + Info.image_id} class="btn btn-dark mt-4">Ampliar <IoScanCircleSharp /></Link>
                        </Card.Body>
                    </Card>
                    <Link href={"/"} class="btn btn-dark mt-2">Voltar <IoArrowBackCircleSharp /></Link>
                </Col>

                <Col md={8}>
                    <Card border="dark" className='border-dark'>
                        <Card.Header className='text-center text-light bg-dark'>{Info.title}</Card.Header>
                        <Card.Body >
                            <Card.Text><strong className='text-danger'>Artista:</strong> {Info.artist_title}</Card.Text>
                            <Card.Text><strong className='text-danger'>Departamento:</strong> {Info.department_title}</Card.Text>
                            <Card.Text><strong className='text-danger'>Origem:</strong> {Info.place_of_origin}</Card.Text>
                            <Card.Text><strong className='text-danger'>Dimensões:</strong> {Info.dimensions}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Pagina>
    )
}

export default infosArt


export async function getServerSideProps(context) {
    const id = context.params.id

    const ArtInfo = await apiArtinstituteChicagoAPI.get('/artworks/' + id)
    const Info = ArtInfo.data.data

    return {
        props: { Info }, // will be passed to the page component as props
    }
}