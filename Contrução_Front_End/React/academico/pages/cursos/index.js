import Pagina from '@/components/Pagina'
import Link from 'next/link'
import Router from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap'
import { BsTrashFill } from 'react-icons/Bs';

const index = () => {
                                                                                // TENTATIVA FALHA

    // useEffect(() => {
    //   const storedData = JSON.parse(localStorage.getItem('cursos'));
    //   setData(storedData);
    // }, []);

    // function deleteItem(itemId) {
    //     const updatedData = data.filter((item) => item.id !== itemId);
    //     localStorage.setItem('cursos', JSON.stringify(updatedData));
    //     setData(updatedData);
    // }

    // function deleteItem(id) {
        
    //     let cursos = JSON.parse(localStorage.getItem('cursos')) || []; // OBTÉM OS DADOS DO LOCALSTORAGE
        
    //     cursos = cursos.filter(curso => curso.id !== id); // FILTRA O ARRAY, REMOVE O ID FORNECIDO 
        
    //     localStorage.setItem('cursos', JSON.stringify(cursos)); // ATUALIZA O LOCALSTORAGE COM OS NOVOS DADOS

    //     Router.reload() // RECARREGA A PÁGINA
    // }

    // onClick={() => deleteItem(item.id)}

                                                                                // CÓDIGO CORRETO

    const [data, setData] = useState([]);
    useEffect(() => {
        setData(getAll())
    }, []); // ATUALIZA A FUNÇÃO DATA

    function getAll () {
        return JSON.parse(localStorage.getItem('cursos')) || []
    }

    function deleteItem(id) {
        const cursos = getAll()
        cursos.splice(id, 1)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))
        setData(cursos)
    }

    return (
        <Pagina titulo='Cursos'>
            <Link href={'/cursos/form'} className='btn btn-danger mb-3'>Novo</Link>
            <Table striped bordered hover variant="danger">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Curso</th>
                        <th>duracao</th>
                        <th>Modalidade</th>
                    </tr>
                </thead>
                <tbody>
                    {data === null ? '' :
                        data.map((item, i) => (
                            <tr key={i}>
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
