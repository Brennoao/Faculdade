import React from 'react'
import { Button, Table } from 'react-bootstrap'
import Link from 'next/link'
import apiRestaurante from '../../services/apiRestaurante'
import Counter from '../../components/Counter'
import { AiFillEdit } from 'react-icons/Ai'
import { BsTrashFill } from 'react-icons/Bs'
import axios from 'axios'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Align from '../../components/Align'
import { capitalizeWords } from '../../components/CapitalizeWords'
import formatacaoValue from '../../components/formatacaoValue'

const index = ({ pullProdutos }) => {
    const { push } = useRouter();

    function deletar(id) {
        if (confirm('tem certeza que quer deletar o item')) {
            axios.delete('/api/produtos/' + id)
            // console.log(id)
            push('/produtos')
        }
    }

    console.log(pullProdutos)
    return (
        <>
        <Header />
            <Align>
                <div className='d-flex justify-content-between mb-3'>
                    <Link href='/produtos/form' className='btn btn-primary'>Novo</Link>
                    <Counter Variavel={pullProdutos} Name='Contador' />
                </div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th colSpan={2}>#</th>
                            <th>Classificação</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Fornecedores</th>
                            <th>Pedidos</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {pullProdutos.map(item => (
                            <tr key={item.id}>
                                <td style={{ width: '2rem' }}><Link href={'/produtos/' + item.id} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => deletar(item.id)}><BsTrashFill /></Button></td>
                                <td>{item.tipo.nome}</td>
                                <td>{capitalizeWords(item.nome)}</td>
                                <td>{item.quantidade}</td>
                                <td>{item.fornecedor.razao_social}</td>
                                <td>{item.pedido.length}</td>
                                <td>{formatacaoValue(item.valor)}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </Table>
            </Align>
        </>
    )
}

export default index

{/* <td colSpan={2}>Larry the Bird</td> */ }

export async function getServerSideProps(context) {

    const Produtos = await apiRestaurante.get('/Produtos')
    const pullProdutos = Produtos.data

    return {
        props: { pullProdutos }, // will be passed to the page component as props
    }
}