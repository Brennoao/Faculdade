import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap'
import { BsTrashFill } from 'react-icons/Bs';
import { AiFillEdit } from 'react-icons/Ai';

const index = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        setData(getAll())
    }, []);                                                                 // ATUALIZA A FUNÇÃO DATA

    function getAll () {
        return JSON.parse(localStorage.getItem('cursos')) || []
    }

    function deleteItem(id) {
        if (confirm('Deseja realmente deletar este item')) {                // CONFIRM = FUNÇÃO DO JAVASCRIPT = DUAS OPÇÕES OK=TRUE CANCELAR=FALSE
            const cursos = getAll()                                         // PUXA A FUNÇÃO getAll
            cursos.splice(id, 1)                                            // SPLICE = FUNÇÃO DO JAVASCRIPT = OFERECE 3 PARÂMETROS (DESSE, DELETAR, ALTERAR) 
            console.log(cursos)
            window.localStorage.setItem('cursos', JSON.stringify(cursos))
            setData(cursos)                                                 // ATUALIZA O USESTATE ATUALIZANDO A FUNÇÃO DESEJADA
        }
    }

    console.log(data)

    return (
        <Pagina titulo='Cursos'>
            <Link href={'/cursos/form'} className='btn btn-danger mb-3'>Novo</Link>
            <Table striped bordered hover variant="danger">
                <thead>
                    <tr>
                        <th colSpan={2}>#</th>
                        <th>Curso</th>
                        <th>duracao</th>
                        <th>Modalidade</th>
                    </tr>
                </thead>
                <tbody>
                    {data === null ? '' :
                        data.map((item, i) => (
                            <tr key={i}>
                                <td style={{ width: '2rem' }}><Link href={'/cursos/' + i} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => deleteItem(i)}><BsTrashFill /></Button></td>
                                <td style={{ width: '33.33%' }}>{item.nome}</td>
                                <td style={{ width: '33.33%' }}>{item.duracao}</td>
                                <td style={{ width: '33.33%' }}>{item.modalidade}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
