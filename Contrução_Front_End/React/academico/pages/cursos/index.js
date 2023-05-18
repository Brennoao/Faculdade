import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { BsTrashFill } from 'react-icons/Bs';

const index = () => {

    const [data, setData] = useState([]);

    // useEffect(() => {
    //   const storedData = JSON.parse(localStorage.getItem('cursos'));
    //   setData(storedData);
    // }, []);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('cursos')));
    }, []);

    console.log(data);

    return (
        <Pagina titulo='Cursos'>
            <Link href={'/cursos/form'} className='btn btn-warning mb-3'>Novo</Link>
            <Table striped bordered hover variant="warning">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Curso</th>
                        <th>duracao</th>
                        <th>Modalidade</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr>
                            {/* <td>{i}</td> */}
                            <td><BsTrashFill className='text-danger' /></td>
                            <td>{item.nome}</td>
                            <td>{item.duracao}</td>
                            <td>{item.modalidade}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
