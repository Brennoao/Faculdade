import Link from 'next/link'
import React, { useState } from 'react'
import { Accordion, Card, Col, Modal, Row, Table } from 'react-bootstrap'
import Pagina from '../../../components/Pagina'
import apiFilmes from '../../../services/apiFilmes'

const seriesInfos = ({ infos, Atores }) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    }
    console.log(infos)
    console.log(Atores)

    return (
        <Pagina titulo={infos.name}>
            <div className='d-flex gap-0 column-gap-3 border-primary border rounded-4 border-4 p-4 mb-5'>
                <Col title={infos.title} md={4}>
                    <Card className='card border-light mr-3'>
                        <Card.Img variante='top' src={'https://image.tmdb.org/t/p/w500/' + infos.poster_path} />
                    </Card>
                </Col>
                <Col md={9}>
                    <h2>Detalhes</h2>
                    <p><strong>Em produção:</strong> {infos.in_production ? "Sim" : "Nãø"} </p>
                    {infos.homepage ? (<p><strong>Site:</strong> <Link href={infos.homepage}>{infos.homepage}</Link></p>) : ("")}
                    <p><strong>Temporadas</strong> {infos.number_of_seasons}</p>
                    <p><strong>Episódios</strong> {infos.number_of_episodes}</p>
                    <h2 className='mt-4'>Gêneros</h2>
                    <ol>
                        {infos.genres.map(item => (<li key={item.id}>{item.name}</li>))}
                    </ol>
                    {infos.overview ? (<div className='w-auto'>
                        <h2>Sinopse</h2>
                        <p style={{ width: '50em' }}>{infos.overview}</p>
                    </div>) : ("")}
                </Col>

            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ñ</th>
                        <th>Foto</th>
                        <th>ñ episodios</th>
                        <th>Numero Temp</th>
                    </tr>
                </thead>
                <tbody>
                    {infos.seasons.map((item) => (
                        <tr key={item.id}>
                            <td>{item.season_number}</td>
                            <td> <img className="h-50" src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} onClick={() => handleImageClick(`https://image.tmdb.org/t/p/w500/${item.poster_path}`)} /> </td>
                            <td>{item.episode_count}</td>
                            <td>
                                <p>{item.name}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body className="show-grid">
                    <Row md={2}>
                        <img className='h-100' src={selectedImage} />
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>
                </Modal.Body>
            </Modal>

            <h2>Atores</h2>

            <Row md={5} className='d-flex gap-0 column-gap-3 row-gap-5 justify-content-between border-primary border rounded-4 border-4 p-4'>
                {/* <h2>Atores</h2> */}
                {Atores.cast.map(item => (
                    <>
                        {item.profile_path ? (
                            <Card key={item.id} className='border-primary border rounded-4 border-4 p-4'>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                                <Card.Body>
                                    <Card.Title className='border-bottom border-4 border-primary pb-2'>{item.name}</Card.Title>
                                    <Card.Title>{item.character}</Card.Title>
                                </Card.Body>
                                <Link variant="primary" href={"/ator/" + item.credit_id} className='btn btn-primary'>Entrar</Link>
                            </Card>
                        ) : ("")}
                    </>
                ))}
            </Row>
        </Pagina>
    )
}

export default seriesInfos

export async function getServerSideProps(context) {
    const id = context.params.id

    const resultado = await apiFilmes.get('/tv/' + id + '?language=pt-BR')
    const infos = resultado.data

    const resAtores = await apiFilmes.get('/tv/' + id + '/credits?language=pt-BR')
    const Atores = resAtores.data

    return {
        props: { infos, Atores }, // will be passed to the page component as props
    }
}

// /tv/{tv_id}/season/{season_number}