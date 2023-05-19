import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap'
import { BsTrashFill } from 'react-icons/Bs';
import { v4 } from 'uuid';

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

                                                                                // CÓDIGO CORRETO

    const [data, setData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('cursos')))
    }, []); // ATUALIZA A FUNÇÃO DATA

    function deleteItem(id) {
        
        const cursos = JSON.parse(localStorage.getItem('cursos')) || []; // OBTÉM OS DADOS DO LOCALSTORAGE
        
        const novosCursos = cursos.filter(curso => curso.id !== id); // FILTRA O ARRAY, REMOVE O ID FORNECIDO 
        
        localStorage.setItem('cursos', JSON.stringify(novosCursos)); // ATUALIZA O LOCALSTORAGE COM OS NOVOS DADOS

        router.reload() // RECARREGA A PÁGINA
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
                            <tr key={item.id}>
                                <td style={{ width: '2rem' }}><Button className='btn-danger' onClick={() => deleteItem(item.id)}><BsTrashFill /></Button></td>
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
