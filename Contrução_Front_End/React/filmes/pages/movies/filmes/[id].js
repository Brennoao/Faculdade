import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pagina from '../../../components/Pagina'
import apiFilmes from '../../../services/apiFilmes'
import Link from 'next/link';

const Detalhes = ({ filme, Atores }) => {
    console.log(filme)
    console.log(Atores)

    function formatacao(filme) {
    
        const Orcamento = (filme.budget)

        const formatado = Orcamento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        return formatado;

    }

    return (
        <>
       
        <Pagina titulo={filme.title}>
            <div className='d-flex gap-0 column-gap-3 border-primary border rounded-4 border-4 p-4 mb-5'>
                <Col title={filme.title} md={4}>
                    <Card className='card border-light mr-3'>
                        <Card.Img variante='top' src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                    </Card>
                </Col>
                <Col md={9}>
                    <h2>Detalhes</h2>
                    <p><strong>Lançamento:</strong>{filme.release_date}</p>
                    <p><strong>Duração:</strong> {filme.runtime} min</p>
                    {filme.homepage ? ( <p><strong>Site:</strong> <Link href={filme.homepage}>{filme.homepage}</Link></p> ) : ("")}
                    <p><strong>Orçamento:</strong> {formatacao(filme)}</p>
                    <h2 className='mt-4'>Gêneros</h2>
                    <ol>
                        {filme.genres.map(item => (<li>{item.name}</li>))}
                    </ol>
                    <div className='w-auto'>
                        <h2>Sinopse</h2>
                        <p style={{ width: '50em' }}>{filme.overview}</p>
                    </div>
                </Col>

            </div>
            <h2>Atores</h2>
            
            
                        
            <Row md={5} className='d-flex gap-0 column-gap-3 row-gap-5 justify-content-between border-primary border rounded-4 border-4 p-4'>
                {/* <h2>Atores</h2> */}
                {Atores.cast.map(item => (
                    <>
                    {item.profile_path ? (
                        <Card title={`${item.name} - ${item.character}`} key={item.id} className='border-primary border rounded-4 border-4 p-4'>
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
        </>
    )
}

export default Detalhes

export async function getServerSideProps(context) {
    const id = context.params.id

    const resultado = await apiFilmes.get('/movie/' + id + '?language=pt-BR')
    const filme = resultado.data

    const resAtores = await apiFilmes.get('/movie/' + id + '/credits?language=pt-BR')
    const Atores = resAtores.data

    return {
        props: { filme, Atores }, // will be passed to the page component as props
    }
}
{/* <Card.Subtitle className="mb-2 text-white">Lingua Original: {item.original_language}</Card.Subtitle> */ }
{/* <Card.Text>Outras Infos:</Card.Text> */ }
{/* <ListGroup className='mb-0'>
    <ListGroup.Item>Lançamento: {item.release_date}</ListGroup.Item>
    <ListGroup.Item>Votos: {item.vote_average}</ListGroup.Item>
</ListGroup> */}