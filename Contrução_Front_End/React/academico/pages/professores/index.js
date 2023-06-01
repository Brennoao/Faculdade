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

    const [professores, setProfessores] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/professores').then(resultado => {
            setProfessores(resultado.data);
            // console.log(resultado.data)
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente deletar??')) {
            axios.delete('/api/professores/' + id)
            getAll()
        }
    }

    console.log(professores)

    return (
        <Pagina titulo='Professores'>
            <Link href="/professores/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th colSpan={2}>#</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Matrícula</th>
                        <th>Salario</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>CEP</th>
                        <th>Logradouro</th>
                        <th>Complemento</th>
                        <th>Número</th>
                        <th>Bairro</th>
                    </tr>
                </thead>
                <tbody>
                    {professores === null ? '' :
                        professores.map(item => (
                            <tr key={item.id}>
                                <td><Link href={'/professores/' + item.id} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td><Button variant='danger' onClick={() => excluir(item.id)}><BsTrashFill /></Button></td>
                                <td>{capitalizeWords(item.nome)}</td>
                                <td>{capitalizeWords(item.cpf)}</td>
                                <td>{capitalizeWords(item.matricula)}</td>
                                <td>{capitalizeWords(item.salario)}</td>
                                <td>{capitalizeWords(item.email)}</td>
                                <td>{capitalizeWords(item.telefone)}</td>
                                <td>{capitalizeWords(item.cep)}</td>
                                <td>{capitalizeWords(item.logradouro)}</td>
                                <td>{capitalizeWords(item.complemento)}</td>
                                <td>{capitalizeWords(item.numero)}</td>
                                <td>{capitalizeWords(item.bairro)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
