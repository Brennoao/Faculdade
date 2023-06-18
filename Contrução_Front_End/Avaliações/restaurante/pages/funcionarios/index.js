import React from 'react'
import { Button, Table } from 'react-bootstrap'
import Align from '../../components/Align'
import Link from 'next/link'
import apiRestaurante from '../../services/apiRestaurante'
import Counter from '../../components/Counter'
import { AiFillEdit } from 'react-icons/Ai'
import { BsTrashFill } from 'react-icons/Bs'
import axios from 'axios'
import { useRouter } from 'next/router'
import { CpfFormat, RegistroGeral } from '../../components/CnpjFormat'
import Header from '../../components/Header'

const index = ({ pullFuncionarios }) => {
    const { push } = useRouter();

    function deletar(id) {
        if(confirm('tem certeza que quer deletar o item')) {
            axios.delete('/api/funcionarios/' + id)
            console.log(id)
            push('/funcionarios')
        }
    }

    console.log(pullFuncionarios)
    return (
        <>
        <Header />
            <Align>
                <div className='d-flex justify-content-between mb-3'>
                    <Link href='/funcionarios/form' className='btn btn-primary'>Novo</Link>
                    <Counter Variavel={pullFuncionarios} Name='Contador'/>
                </div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th colSpan={2}>#</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Registro Geral</th>
                            <th>Email</th>
                            <th>Cargo</th>
                            <th>Senha</th>
                            <th>Restaurantes</th>
                        </tr>
                    </thead>
                    <tbody>
                        { pullFuncionarios.map(item => (
                            <tr key={item.id}>
                                <td style={{ width: '2rem' }}><Link href={'/funcionarios/' + item.id} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => deletar(item.id)}><BsTrashFill /></Button></td>
                                <td>{item.nome}</td>
                                <td>{CpfFormat(item.cpf)}</td>
                                <td>{RegistroGeral(item.registro_geral)}</td>
                                <td>{item.email}</td>
                                <td>{item.cargo}</td>
                                <td>{item.senha}</td>
                                <td>{item.restaurante.razao_social}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Align>
        </>
    )
}

export default index

{/* <td colSpan={2}>Larry the Bird</td> */ }

export async function getServerSideProps(context) {

    const Funcionarios = await apiRestaurante.get('/Funcionarios')
    const pullFuncionarios = Funcionarios.data

    return {
        props: { pullFuncionarios }, // will be passed to the page component as props
    }
}