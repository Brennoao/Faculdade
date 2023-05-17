import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React from 'react'
import { Table } from 'react-bootstrap'

const index = () => {
    return (
        <Pagina titulo='Cursos'>
            <Link href={'/cursos/form'} className='btn btn-warning mb-3'>Novo</Link>
            <Table striped bordered hover variant="warning">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index