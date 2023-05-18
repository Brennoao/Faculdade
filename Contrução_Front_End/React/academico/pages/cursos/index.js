import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap'
import { BsTrashFill } from 'react-icons/Bs';
import { v4 as uuidv4 } from 'uuid';

const index = () => {
    const [data, setData] = useState([]);
    const router = useRouter();

    // useEffect(() => {
    //   const storedData = JSON.parse(localStorage.getItem('cursos'));
    //   setData(storedData);
    // }, []);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('cursos')));
    }, []);

    // function deleteItem(itemId) {
    //     const updatedData = data.filter((item) => item.id !== itemId);
    //     localStorage.setItem('cursos', JSON.stringify(updatedData));
    //     setData(updatedData);
    // }

    function deleteItem(dados) {
        localStorage.removeItem('cursos');
        router.reload();
    }

    console.log(data);
    console.log(deleteItem)

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
                    {data === null ? '' :
                        data.map((item, i) => (
                            <tr key={i}>
                                {/* <td><BsTrashFill className='text-danger' onClick={deleteItem} /></td> */}
                                <td><Button onClick={deleteItem}><BsTrashFill /></Button></td>
                                <td>{item.nome}</td>
                                <td>{item.duracao}</td>
                                <td>{item.modalidade}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index
