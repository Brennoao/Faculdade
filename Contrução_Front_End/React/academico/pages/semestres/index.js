import React, { useEffect, useState } from 'react'
import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { BsTrashFill } from 'react-icons/Bs';
import { AiFillEdit } from 'react-icons/Ai';
import { Table } from 'react-bootstrap'
import { capitalizeWords } from '@/components/CapitalizeWords';
import { Button } from 'react-bootstrap';


const index = () => {

    const [semestres, setSemestres] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/semestres').then(resultado => {
            setSemestres(resultado.data);
            // console.log(resultado.data)
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente deletar??')) {
            axios.delete('/api/semestres/' + id)
            getAll()
        }
    }

    console.log(semestres)

    return (
        <Pagina titulo='semestres'>
            <Link href="/semestres/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan={2}>#</th>
                        <th>Nome</th>
                        <th>Data_Inicio</th>
                        <th>Data_Fim</th>
                    </tr>
                </thead>
                <tbody>
                    {semestres === null ? '' :
                        semestres.map(item => (
                            <tr key={item.id}>
                                <td style={{ width: '2rem' }}><Link href={'/semestres/' + item.id} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => excluir(item.id)}><BsTrashFill /></Button></td>
                                <td style={{ width: '33.33%' }}>{capitalizeWords(item.nome)}</td>
                                <td style={{ width: '33.33%' }}>{capitalizeWords(item.dataInicio)}</td>
                                <td style={{ width: '33.33%' }}>{capitalizeWords(item.dataFim)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
