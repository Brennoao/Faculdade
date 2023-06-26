import React from 'react'
import { Button, Table } from 'react-bootstrap'
import Align from '../../components/Align'
import Link from 'next/link'
import apiRestaurante from '../../services/apiRestaurante'
import { CnpjFormat } from '../../components/CnpjFormat'
import Counter from '../../components/Counter'
import { AiFillEdit } from 'react-icons/Ai'
import { BsTrashFill } from 'react-icons/Bs'
import axios from 'axios'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import { Celular } from '../../components/Call'
import { CapitalizeWords } from '../../components/CapitalizeWords'

const index = ({ pullInfosRestaurante }) => {
    const { push } = useRouter();

    function deletar(id) {
        if (confirm('tem certeza que quer deletar o item')) {
            axios.delete('/api/pedidosProdutos/' + id)
            console.log(id)
            push('/pedidosProdutos')
        }
    }

    console.log(pullInfosRestaurante)
    return (
        <>
            <Header />
            <Align>
                <div className='d-flex justify-content-between mb-3'>
                    <Link href='/fornecedores/form' className='btn btn-primary'>Novo</Link>
                    <Counter Variavel={pullInfosRestaurante} Name='Contador' />
                </div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th colSpan={2}>#</th>
                            <th>Razao Social</th>
                            <th>CNPJ</th>
                            <th>Celular</th>
                            <th>Cep</th>
                            <th>Endereco</th>
                            <th>Produtos</th>
                            <th>Restaurantes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {pullInfosRestaurante ? pullInfosRestaurante.map(item => (
                            <tr key={item.id}>
                                <td style={{ width: '2rem' }}><Link href={'/fornecedores/' + item.id} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => deletar(item.id)}><BsTrashFill /></Button></td>
                                <td>{CapitalizeWords(item.razao_social)}</td>
                                <td>{CnpjFormat(item.cnpj)}</td>
                                <td>{Celular(item.celular)}</td>
                                <td>{item.cep}</td>
                                <td>{item.endereco}</td>
                                <td>{item.produto.length}</td>
                                <td>{CapitalizeWords(item.restaurante.razao_social)}</td>
                            </tr>
                        )): ''} */}
                    </tbody>
                </Table>
            </Align>
        </>
    )
}

export default index

{/* <td colSpan={2}>Larry the Bird</td> */ }

export async function getServerSideProps(context) {

    const restaurante = await apiRestaurante.get('/PedidosHasProduto')
    const pullInfosRestaurante = restaurante.data

    return {
        props: { pullInfosRestaurante }, // will be passed to the page component as props
    }
}