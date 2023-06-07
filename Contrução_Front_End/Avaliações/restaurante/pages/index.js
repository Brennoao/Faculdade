import React from 'react'
import { Table } from 'react-bootstrap'
import Align from '../components/Align'
import Link from 'next/link'
import apiRestaurante from '../services/apiRestaurante'
import { CnpjFormat, Inscricaoestadual } from '../components/CnpjFormat'
import Counter from '../components/Counter'

const index = ({ pullInfosRestaurante }) => {

    console.log(pullInfosRestaurante)
    return (
        <>
            <Align>
                <div className='d-flex justify-content-between mb-3'>
                    <Link href='/form' className='btn btn-primary'>Novo</Link>
                    <Counter Variavel={pullInfosRestaurante} Name='Contador'/>
                </div>
                <Table striped="columns" bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>CNPJ</th>
                            <th>Inscrição Estadual</th>
                            <th>Fornecedores</th>
                            <th>Funcionários</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pullInfosRestaurante.map(item => (
                            <tr key={item.id}>
                                <td>{item.razao_social}</td>
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