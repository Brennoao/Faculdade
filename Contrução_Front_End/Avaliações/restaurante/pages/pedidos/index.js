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
import Header from '../../components/Header'
import { CapitalizeWords } from '../../components/CapitalizeWords'
import Swal from 'sweetalert2'

const index = ({ pullPedidos }) => {
    const { push } = useRouter();

    function deletar(id) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: { confirmButton: 'btn btn-success', cancelButton: 'btn btn-danger' },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({ title: 'Tem certeza?', text: "Ação sem volta!", icon: 'warning', showCancelButton: true, confirmButtonText: 'Deletar', cancelButtonText: 'Cancelar', reverseButtons: true }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire('Removido!', 'Seu arquivo foi excluído.', 'success')
                axios.delete('/api/pedidos/' + id)
                push('/pedidos')
            }
            else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire('Ação cancelada', 'Seu arquivo está seguro', 'error')
            }
        })
    }

    console.log(pullPedidos)

    var valoTotal = 0
    return (
        <>
        <Header Title='Pedidos'/>
            <Align>
                <div className='d-flex justify-content-between mb-3'>
                    <Link href='/pedidos/form' className='btn btn-dark'>Novo</Link>
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
                            {/* <th>Valor Total</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {pullPedidos.map(item => (
                            <tr key={item.id}>
                                <td style={{ width: '2rem' }}><Link href={'/pedidos/' + item.id} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => deletar(item.id)}><BsTrashFill /></Button></td>
                                <td>{item.mesa_id}</td>
                                <td>{CapitalizeWords(item.funcionario.nome)}</td>
                                <td>{item.data}</td>
                                <td>{item.forma_pagamento}</td>
                                <td>{item.produtos.length}</td>
                                {/* <td>{item.produtos.map(item => (
                                    valoTotal + item.valor
                                ))}</td> */}
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