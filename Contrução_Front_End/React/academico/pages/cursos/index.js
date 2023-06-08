import React, { useEffect, useState } from 'react'
import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { BsTrashFill } from 'react-icons/Bs';
import { AiFillEdit } from 'react-icons/Ai';
import { Table } from 'react-bootstrap'
import { capitalizeWords } from '@/components/CapitalizeWords';
import { Button } from 'react-bootstrap';
import Counter from '@/components/Counter';


const index = () => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/cursos').then(resultado => {
            setCursos(resultado.data);
            // console.log(resultado.data)
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente deletar??')) {
            axios.delete('/api/cursos/' + id)
            getAll()
        }
    }

    console.log(cursos)

    return (
        <Pagina titulo='Cursos'>
            <div className='d-flex justify-content-between mb-3'>
                <Link href="/cursos/form" className='btn btn-primary'>Novo</Link>
                <Counter Variavel='/api/cursos' Name='Cursos' />
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan={2}>#</th>
                        <th>Nome</th>
                        <th>Duração</th>
                        <th>Modalidade</th>
                    </tr>
                </thead>
                <tbody>
                    {cursos === null ? '' :
                        cursos.map(item => (
                            <tr key={item.id}>
                                <td style={{ width: '2rem' }}><Link href={'/cursos/' + item.id} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => excluir(item.id)}><BsTrashFill /></Button></td>
                                <td style={{ width: '33.33%' }}>{capitalizeWords(item.nome)}</td>
                                <td style={{ width: '33.33%' }}>{capitalizeWords(item.duracao)}</td>
                                <td style={{ width: '33.33%' }}>{capitalizeWords(item.modalidade)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
