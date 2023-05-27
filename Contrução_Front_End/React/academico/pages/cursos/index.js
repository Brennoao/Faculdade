import React from 'react'
import Pagina from '@/components/Pagina'
import Looping from '@/components/Looping';

const index = () => {

    return (
        <Pagina titulo='Cursos'>
            <Looping Cursos='cursos' colSpan='2' Nome='nome' Duracao='duracao' Modalidade='modalidade'/>
        </Pagina>
    )
}

export default index
