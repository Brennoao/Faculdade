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

const index = ({ pullMesas }) => {
    const { push } = useRouter();

    function deletar(id) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: { confirmButton: 'btn btn-success', cancelButton: 'btn btn-danger' },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({ title: 'Tem certeza?', text: "Ação sem volta!", icon: 'warning', showCancelButton: true, confirmButtonText: 'Deletar', cancelButtonText: 'Cancelar', reverseButtons: true }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire('Removido!', 'Seu arquivo foi excluído.', 'success')
                axios.delete('/api/mesas/' + id)
                push('/mesas')
            }
            else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire('Ação cancelada', 'Seu arquivo está seguro', 'error')
            }
        })
    }

    console.log(pullMesas)
    return (
        <>
        <Header Title='Mesas'/>
            <Align>
                <div className='d-flex justify-content-between mb-3'>
                    <Link href='/mesas/form' className='btn btn-dark'>Novo</Link>
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
                                <td>{CapitalizeWords(item.restaurante.razao_social)}</td>
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