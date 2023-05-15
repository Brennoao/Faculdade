import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pagina from '../../../components/Pagina'
import apiFilmes from '../../../services/apiFilmes'
import Link from 'next/link';

import Fotos from '../../../components/Fotos'

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
                <Col md={4}>
                    <Card className='card border-light mr-3'>
                        <Card.Img variante='top' src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
                    </Card>
                </Col>
                <Col md={9}>
                    <h2>Detalhes</h2>
                    <p><strong>Lançamento:</strong> {filme.release_date}</p>
                    <p><strong>Duração:</strong> {filme.runtime} min</p>
                    {filme.homepage ? ( <p><strong>Site:</strong> <Link href={filme.homepage}>{filme.homepage}</Link></p> ) : ("")}
                    <p><strong>Orçamento:</strong> {formatacao(filme)}</p>
                    <h2 className='mt-4'>Gêneros</h2>
                    <ol>
                        {filme.genres.map(item => (<li key={item.id}>{item.name}</li>))}
                    </ol>
                    <div className='w-auto'>
                        <h2>Sinopse</h2>
                        <p style={{ width: '50em' }}>{filme.overview}</p>
                    </div>
                </Col>

            </div>
            {/* <h2>Atores</h2> */}
            
            <Fotos titulo='Atores' lista={Atores.cast} link='/ator/' id='credit_id' foto='profile_path'/>
 
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