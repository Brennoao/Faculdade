import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import Align from '../../components/Align'
import Link from 'next/link'
import apiRestaurante from '../../services/apiRestaurante'
import Counter from '../../components/Counter'
import { AiFillEdit } from 'react-icons/Ai'
import { BsTrashFill } from 'react-icons/Bs'
import axios from 'axios'
import { useRouter } from 'next/router'
import { CpfFormat, RegistroGeral } from '../../components/CnpjFormat'
import Header from '../../components/Header'
import { CapitalizeWords } from '../../components/CapitalizeWords'
import Swal from 'sweetalert2'

const index = ({ pullFuncionarios }) => {
    const { push } = useRouter();

    function deletar(id) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: { confirmButton: 'btn btn-success', cancelButton: 'btn btn-danger' },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({ title: 'Tem certeza?', text: "Ação sem volta!", icon: 'warning', showCancelButton: true, confirmButtonText: 'Deletar', cancelButtonText: 'Cancelar', reverseButtons: true }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire('Removido!', 'Seu arquivo foi excluído.', 'success')
                axios.delete('/api/funcionarios/' + id)
                push('/funcionarios')
            }
            else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire('Ação cancelada', 'Seu arquivo está seguro', 'error')
            }
        })
    }

    const formatPassword = (senha) => {
        return '*'.repeat(senha.length);
    };

    console.log(pullFuncionarios)
    return (
        <>
            <Header Title='Funcionarios'/>
            <Align>
                <div className='d-flex justify-content-between mb-3'>
                    <Link href='/funcionarios/form' className='btn btn-dark'>Novo</Link>
                    <Counter Variavel={pullFuncionarios} Name='Contador' />
                </div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th colSpan={2}>#</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Registro Geral</th>
                            <th>Email</th>
                            <th>Cargo</th>
                            <th>Senha</th>
                            <th>Restaurantes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pullFuncionarios.map(item => (
                            <tr key={item.id}>
                                <td style={{ width: '2rem' }}><Link href={'/funcionarios/' + item.id} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => deletar(item.id)}><BsTrashFill /></Button></td>
                                <td>{CapitalizeWords(item.nome)}</td>
                                <td>{CpfFormat(item.cpf)}</td>
                                <td>{RegistroGeral(item.registro_geral)}</td>
                                <td>{item.email}</td>
                                <td>{CapitalizeWords(item.cargo)}</td>
                                <td>{formatPassword(item.senha)}</td>
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

export async function getServerSideProps(context) {

    const Funcionarios = await apiRestaurante.get('/Funcionarios')
    const pullFuncionarios = Funcionarios.data

    return {
        props: { pullFuncionarios }, // will be passed to the page component as props
    }
}