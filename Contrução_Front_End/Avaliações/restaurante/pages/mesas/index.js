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
import { capitalizeWords } from '../../components/CapitalizeWords'

const index = ({ pullMesas }) => {
    const { push } = useRouter();

    function deletar(id) {
        if (confirm('tem certeza que quer deletar o item')) {
            axios.delete('/api/mesas/' + id)
            console.log(id)
            push('/mesas')
        }
    }

    console.log(pullMesas)
    return (
        <>
            <Align>
                <div className='d-flex justify-content-between mb-3'>
                    <Link href='/mesas/form' className='btn btn-primary'>Novo</Link>
                    <Counter Variavel={pullMesas} Name='Contador' />
                </div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th colSpan={2}>#</th>
                            <th>Número</th>
                            <th>Restaurante</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pullMesas.map(item => (
                            <tr key={item.id}>
                                <td style={{ width: '2rem' }}><Link href={'/mesas/' + item.id} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => deletar(item.id)}><BsTrashFill /></Button></td>
                                <td>{item.numero}</td>
                                <td>{item.restaurante_id}</td>
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

    const Mesas = await apiRestaurante.get('/Mesas')
    const pullMesas = Mesas.data

    return {
        props: { pullMesas }, // will be passed to the page component as props
    }
}