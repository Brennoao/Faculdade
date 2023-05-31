import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap'
import { BsTrashFill } from 'react-icons/Bs';
import { AiFillEdit } from 'react-icons/Ai';
import { capitalizeWords } from './CapitalizeWords';

const Looping = (props) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        setData(getAll())
    }, []);                                                                     // ATUALIZA A FUNÇÃO DATA

    function getAll() {
        return JSON.parse(localStorage.getItem(props.Cursos)) || []
    }

    function deleteItem(id) {
        if (confirm('Deseja realmente deletar este item')) {                    // CONFIRM = FUNÇÃO DO JAVASCRIPT = DUAS OPÇÕES OK=TRUE CANCELAR=FALSE
            const cursos = getAll()                                             // PUXA A FUNÇÃO getAll
            cursos.splice(id, 1)                                                // SPLICE = FUNÇÃO DO JAVASCRIPT = OFERECE 3 PARÂMETROS (DESSE, DELETAR, ALTERAR) 
            console.log(cursos)
            window.localStorage.setItem(props.Cursos, JSON.stringify(cursos))
            setData(cursos)                                                     // ATUALIZA O USESTATE ATUALIZANDO A FUNÇÃO DESEJADA
        }
    }

    return (
        <>
            <div className='d-flex justify-content-between mb-3'>
                <Link href={props.Link} className='btn btn-danger'>Novo</Link>
                {props.children}
            </div>
            <Table bordered hover variant="danger">
                <thead className='text-center'>
                    <tr>
                        {props.colSpan ?
                            <th colSpan={props.colSpan}>#</th> :
                            <>
                                <th>{'Editar'.toUpperCase()}</th>
                                <th>{'Deletar'.toUpperCase()}</th>
                            </>
                        }
                        <th>{props.Nome.toUpperCase()}</th>
                        <th>{props.Duracao.toUpperCase()}</th>
                        <th>{props.Modalidade.toUpperCase()}</th>
                    </tr>
                </thead>
                <tbody>
                    {data === null ? '' :
                        data.map((item, i) => (
                            <tr key={i}>
                                <td style={{ width: '2rem' }}><Link href={props.href + i} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => deleteItem(i)}><BsTrashFill /></Button></td>
                                <td style={{ width: '33.33%' }}>{capitalizeWords(item[props.Nome])}</td>
                                <td style={{ width: '33.33%' }}>{capitalizeWords(item[props.Duracao])}</td>
                                <td style={{ width: '33.33%' }}>{capitalizeWords(item[props.Modalidade])}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Looping