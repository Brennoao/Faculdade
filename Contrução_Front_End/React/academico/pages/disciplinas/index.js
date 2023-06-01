import React, { useEffect, useState } from 'react'
import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { Table } from 'react-bootstrap'
import { BsTrashFill } from 'react-icons/Bs';
import { AiFillEdit } from 'react-icons/Ai';
import { capitalizeWords } from '@/components/CapitalizeWords'
import { Button } from 'react-bootstrap'

const index = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/disciplinas').then(resultado => {
            setDisciplinas(resultado.data);
            // console.log(resultado.data)
        })
    }

    function excluir(id) {
        if(confirm('Deseja realmente deletar??')) {
            axios.delete('/api/disciplinas/' + id)
            getAll()
        }
    }

    console.log(disciplinas)

    return (
        <Pagina titulo="Disciplinas">

            <Link href="/disciplinas/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan={2}>#</th>
                        <th>Nome</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {disciplinas === null ? '' :
                        disciplinas.map(item => (
                            <tr key={item.id}>
                                <td style={{ width: '2rem' }}><Link href={'/disciplinas/' + item.id} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => excluir(item.id)}><BsTrashFill /></Button></td>
                                <td style={{ width: '33.33%' }}>{capitalizeWords(item.nome)}</td>
                                <td style={{ width: '33.33%' }}>{capitalizeWords(item.curso)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
