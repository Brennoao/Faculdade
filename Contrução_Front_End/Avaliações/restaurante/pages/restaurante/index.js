import React from 'react'
import { Button, Table } from 'react-bootstrap'
import Link from 'next/link'
import apiRestaurante from '../../services/apiRestaurante'
import { CnpjFormat, Inscricaoestadual } from '../../components/CnpjFormat'
import Counter from '../../components/Counter'
import { AiFillEdit } from 'react-icons/Ai'
import { BsTrashFill } from 'react-icons/Bs'
import axios from 'axios'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Align from '../../components/Align'
import { CapitalizeWords } from '../../components/CapitalizeWords'

const index = ({ pullInfosRestaurante }) => {
    const { push } = useRouter();

    function deletar(id) {
        if (confirm('tem certeza que quer deletar o item')) {
            axios.delete('/api/restaurante/' + id,)
            console.log(id)
            push('/restaurante')
        }
    }

    console.log(pullInfosRestaurante)
    return (
        <>
            <Header />
            <Align>
                <div className='d-flex justify-content-between mb-3'>
                    <Link href='/restaurante/form' className='btn btn-primary'>Novo</Link>
                    <Counter Variavel={pullInfosRestaurante} Name='Contador' />
                </div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th colSpan={2}>#</th>
                            <th>Razao Social</th>
                            <th>CNPJ</th>
                            <th>Inscrição Estadual</th>
                            <th>Fornecedores</th>
                            <th>Funcionários</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pullInfosRestaurante.map(item => (
                            <tr key={item.id}>
                                <td style={{ width: '2rem' }}><Link href={'/restaurante/' + item.id} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => deletar(item.id)}><BsTrashFill /></Button></td>
                                <td>{CapitalizeWords(item.razao_social)}</td>
                                <td>{CnpjFormat(item.cnpj)}</td>
                                <td>{Inscricaoestadual(item.inscricao_estadual)}</td>
                                <td>{item.fornecedore.length}</td>
                                <td>{item.funcionario.length}</td>
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

    const restaurante = await apiRestaurante.get('/Restaurante')
    const pullInfosRestaurante = restaurante.data

    return {
        props: { pullInfosRestaurante }, // will be passed to the page component as props
    }
}