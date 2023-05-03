import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Fotos from '../../components/Fotos'
import Pagina from '../../components/Pagina'
import apiFilmes from '../../services/apiFilmes'

const idAtor = ({ InfosAtor, Img, Atuou, AtuouTv }) => {

    console.log(InfosAtor)
    console.log(Img)
    console.log(Atuou)
    console.log(AtuouTv)

    const linkImg = 'https://image.tmdb.org/t/p/w500/'
    return (
        <Pagina titulo={InfosAtor.name}>
            <div className='d-flex gap-0 column-gap-3 border-primary border rounded-4 border-4 p-4 mb-5'>
                <Col title={InfosAtor.name}>
                    <Card className='card border-light mr-3'>
                        <Card.Img variante='top' src={linkImg + InfosAtor.profile_path} />
                    </Card>
                </Col>
                <Col md={9}>
                    <p><strong>Aniversário:</strong> {InfosAtor.birthday}</p>
                    <p><strong>Local de Nascimento:</strong> {InfosAtor.place_of_birth}</p>
                    {InfosAtor.homepage ? (
                        <p><strong>Site:</strong> <Link href={InfosAtor.homepage}>{InfosAtor.homepage}</Link></p>
                    ) : (
                        ""
                    )}
                    {InfosAtor.biography ? (
                        <p style={{ width: '50em' }}><strong>Biografia:</strong> {InfosAtor.biography}</p>
                    ) : ('')} 
                </Col>
            </div>
            
            <Fotos titulo='Fotos' lista={Img.profiles} foto='file_path'/>

            <Fotos titulo='Filmes em que atuou' lista={Atuou} foto='poster_path' link='/movies/filmes/'/>

            <Fotos titulo='Series em que atuou' lista={AtuouTv} foto='poster_path' link='/series/idInfo/'/>
            
        </Pagina>
    )
}

export default idAtor

export async function getServerSideProps(context) {
    const id = context.params.idAtor

    // ID DO ATOR(A)

    const resultado = await apiFilmes.get('/credit/' + id)
    const Ator = resultado.data.person.id

    // INFORMAÇÕES DO AUTOR(A)

    const resAtor = await apiFilmes.get('/person/' + Ator + '?language=pt-BR')
    const InfosAtor = resAtor.data

    // IMAGENS DO AUTO(A)

    const ImgAtor = await apiFilmes.get('/person/' + Ator + '/images?language=pt-BR')
    const Img = ImgAtor.data

    // FILMES EM QUE ATUOU

    const AtorFilmes = await apiFilmes.get('/person/' + Ator + '/movie_credits?language=pt-BR')
    const Atuou = AtorFilmes.data.cast

    // SERIES EM QUE ATUOU

    const AtorTv = await apiFilmes.get('/person/' + Ator + '/tv_credits?language=pt-BR')
    const AtuouTv = AtorTv.data.cast

    return {
        props: { InfosAtor, Img, Atuou, AtuouTv }, // will be passed to the page component as props
    }
}

{/* {InfosAtor.map(item => (
                <p></p>
            ))} */}