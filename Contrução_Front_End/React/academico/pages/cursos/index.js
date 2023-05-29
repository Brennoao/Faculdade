import React from 'react'
import Pagina from '@/components/Pagina'
import Looping from '@/components/Looping';
import Counter from '@/components/Counter';

const index = () => {

    return (
        <Pagina titulo='Cursos'>
            <Looping Cursos='cursos' colSpan='2' Nome='nome' Duracao='duracao' Modalidade='modalidade'>
                <Counter Variavel='cursos' />
            </Looping>
        </Pagina>
    )
}

export default index
