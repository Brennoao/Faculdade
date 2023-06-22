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
import { CapitalizeWords } from '../../components/CapitalizeWords'
import Header from '../../components/Header'

const index = ({ pullTipos }) => {
    const { push } = useRouter();

    function deletar(id) {
        if(confirm('tem certeza que quer deletar o item')) {
            axios.delete('/api/tipos/' + id)
            console.log(id)
            push('/tipos')
        }
    }

    console.log(pullTipos)
    return (
        <>
        <Header />
            <Align>
                <div className='d-flex justify-content-between mb-3'>
                    <Link href='/tipos/form' className='btn btn-primary'>Novo</Link>
                    <Counter Variavel={pullTipos} Name='Contador'/>
                </div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th colSpan={2}>#</th>
                            <th>Nome</th>
                            <th>Produto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pullTipos.map(item => (
                            <tr key={item.id}>
                                <td style={{ width: '2rem' }}><Link href={'/tipos/' + item.id} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => deletar(item.id)}><BsTrashFill /></Button></td>
                                <td>{CapitalizeWords(item.nome)}</td>
                                <td>{item.produto.length}</td>
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

    const Tipos = await apiRestaurante.get('/Tipos')
    const pullTipos = Tipos.data

    return {
        props: { pullTipos }, // will be passed to the page component as props
    }
}