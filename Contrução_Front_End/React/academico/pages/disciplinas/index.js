import React, { useEffect, useState } from 'react'
import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { Table } from 'react-bootstrap'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'
import { capitalizeWords } from '@/components/CapitalizeWords'
import { Button } from 'react-bootstrap'

const index = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/disciplinas').then(resultado => {
            // setDisciplinas(resultado.data);
            console.log(resultado.data)
        })
    }

    function excluir(id) {
        axios.delete('/disciplinas/' + id)
        getAll()
    }

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
                    {disciplinas.map((item, i) => (
                        <tr key={i}>
                            <td style={{ width: '2rem' }}><Link href={'/disciplinas/' + i} className='btn btn-danger'><BsFillTrash3Fill /></Link></td>
                            <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => excluir(i)}><BsPencilFill /></Button></td>
                            <td style={{ width: '33.33%' }}>{item.nome}</td>
                            <td style={{ width: '33.33%' }}>{item.curso}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
