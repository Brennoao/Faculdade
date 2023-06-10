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
import { CpfFormat } from '../../components/CnpjFormat'
import Header from '../../components/Header'

const index = ({ pullPedidos }) => {
    const { push } = useRouter();

    function deletar(id) {
        if(confirm('tem certeza que quer deletar o item')) {
            axios.delete('/api/pedidos/' + id)
            console.log(id)
            push('/pedidos')
        }
    }

    console.log(pullPedidos)

    var valoTotal = 0
    return (
        <>
        <Header />
            <Align>
                <div className='d-flex justify-content-between mb-3'>
                    <Link href='/pedidos/form' className='btn btn-primary'>Novo</Link>
                    <Counter Variavel={pullPedidos} Name='Contador'/>
                </div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th colSpan={2}>#</th>
                            <th>Mesa</th>
                            <th>Funcionario</th>
                            <th>Data</th>
                            <th>Forma de Pagamento</th>
                            <th>Produtos</th>
                            <th>Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pullPedidos.map(item => (
                            <tr key={item.id}>
                                <td style={{ width: '2rem' }}><Link href={'/pedidos/' + item.id} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => deletar(item.id)}><BsTrashFill /></Button></td>
                                <td>{item.mesa_id}</td>
                                <td>{item.funcionario.nome}</td>
                                <td>{item.data}</td>
                                <td>{item.forma_pagamento}</td>
                                <td>{item.produtos.length}</td>
                                <td>{item.produtos.map(item => (
                                    valoTotal + item.valor
                                ))}</td>
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

    const Pedidos = await apiRestaurante.get('/Pedidos')
    const pullPedidos = Pedidos.data

    return {
        props: { pullPedidos }, // will be passed to the page component as props
    }
}