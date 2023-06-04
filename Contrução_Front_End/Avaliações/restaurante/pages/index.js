import React from 'react'
import { Table } from 'react-bootstrap'
import Align from '../components/Align'
import apiRestaurante from '../services/apiRestaurante'

const index = ({ pullInfosRestaurante, pullRestaurante }) => {

    const Fornecedores = pullInfosRestaurante.fornecedore

    // console.log(pullRestaurante)
    console.log(pullInfosRestaurante)
    console.log(pullInfosRestaurante.razao_social)
    return (
        <>
            <Align>
                <Table striped="columns">
                    <thead>
                        <tr>
                            <th>{pullRestaurante.razao_social}</th>
                            <th>Funcionários</th>
                            <th>Fornecedores</th>
                            <th>Mesas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pullInfosRestaurante.map((item, i) => (
                            <tr key={item.id}>
                                <td>{i}</td>
                                <td>{item.funcionario.length}</td>
                                <td>{item.fornecedore.length}</td>
                                <td>{item.mesa.length}</td>
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

    const resultado = await apiRestaurante.get('/Restaurante/1')
    const pullRestaurante = resultado.data

    return {
        props: { pullInfosRestaurante, pullRestaurante }, // will be passed to the page component as props
    }
}