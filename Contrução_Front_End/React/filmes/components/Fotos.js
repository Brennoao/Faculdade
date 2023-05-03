import Link from 'next/link'
import React from 'react'
import { Card, Row } from 'react-bootstrap'

function PreExibirFoto(props) {
    const imagem = props.foto ?
        'https://image.tmdb.org/t/p/w500/' + props.foto :
        'https://storage.googleapis.com/macrovector-acl-eu/previews/40042/preview_40042.jpg'

    return (
        <Card.Img className='h-100' variant="top" src={imagem} />
    )

}


function ExibirFoto(props) {
    const linkImg = 'https://image.tmdb.org/t/p/w500/'

    if (props.foto) {
        return (
            props.lista.map(item => (
                <Card className='card border border-primary border-3 p-2'>
                    <PreExibirFoto foto={item[props.foto]}/>
                    {props.link ? <Link href={props.link + item.id} class="btn btn-primary mt-2">Entrar</Link> : ''}
                </Card>
            ))
        )
    } else {
        return (
            props.lista.map(item => (
                <Card className='card border border-primary border-3 p-2'>
                    <PreExibirFoto foto={item[props.foto]}/>
                    {props.link ? <Link href={props.link + item.id} class="btn btn-primary mt-2">Entrar</Link> : ''}
                </Card>
            ))
        )
    }

}

const Fotos = (props) => {
    const linkImg = 'https://image.tmdb.org/t/p/w500/'
    return (
        <>
            {props.titulo && <h2 className='mt-3'>{props.titulo}</h2>}

            <Row md={6} className='justify-content-between border border-primary gap-0 row-gap-3 column-gap-3 rounded-4 border-4 p-4 mb-4'>

                <ExibirFoto lista={props.lista} foto={props.foto} link={props.link} />

            </Row>
        </>
    )
}

export default Fotos;