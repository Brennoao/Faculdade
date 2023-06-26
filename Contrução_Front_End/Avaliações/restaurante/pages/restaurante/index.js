import React, { useState } from 'react'
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
import Swal from 'sweetalert2'

const index = ({ pullInfosRestaurante }) => {
    const { push } = useRouter();

    function deletar(id) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: { confirmButton: 'btn btn-success', cancelButton: 'btn btn-danger' },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({ title: 'Tem certeza?', text: "Ação sem volta!", icon: 'warning', showCancelButton: true, confirmButtonText: 'Deletar', cancelButtonText: 'Cancelar' }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire('Removido!', 'Seu arquivo foi excluído.', 'success')
                axios.delete('/api/restaurante/' + id)
                push('/restaurante')
            }
            else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire('Ação cancelada', 'Seu arquivo está seguro', 'error')
            }
        })
    }



    const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

    console.log(pullInfosRestaurante)
    return (
        <>
            <Header Title='Restaurante' />
            <Align>
                <div className='d-flex justify-content-between mb-3'>
                    <Link href='/restaurante/form' className='btn btn-outline-dark'>Novo</Link>
                    <Counter Variavel={pullInfosRestaurante} Name='Contador' />
                </div>
                <Table striped bordered variant="dark">
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
                                <td style={{ width: '2rem' }}><Link href={'/restaurante/' + item.id} className='btn btn-outline-light'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='outline-light' onClick={() => deletar(item.id)}><BsTrashFill /></Button></td>
                                <td>{CapitalizeWords(item.razao_social)}</td>
                                <td>{CnpjFormat(item.cnpj)}</td>
                                <td>{Inscricaoestadual(item.inscricao_estadual)}</td>
                                <td>{item.fornecedore.length}</td>
                                <td>{item.funcionario.length}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <div>
                    <Button onClick={handleClick} variant='outline-dark'>Clique aqui</Button>
                    {isVisible && <div className='fade-in'>Este elemento aparece quando o botão é clicado</div>}
                </div>

            </Align>

        </>
    )
}

export default index

export async function getServerSideProps(context) {

    const restaurante = await apiRestaurante.get('/Restaurante')
    const pullInfosRestaurante = restaurante.data

    return {
        props: { pullInfosRestaurante }, // will be passed to the page component as props
    }
}