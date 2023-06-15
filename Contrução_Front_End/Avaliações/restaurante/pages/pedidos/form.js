import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Form, FloatingLabel } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Align from '../../components/Align'
import { useRouter } from 'next/router';
import { BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'
import Header from '../../components/Header'
import pedidosValidator from '../../validators/pedidosValidator'

const form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { push } = useRouter();

    const [restaurantes, setRestaurantes] = useState([])

    useEffect(() => {
        axios.get('/api/restaurante').then(resultado => {
            setRestaurantes(resultado.data);
            // console.log(resultado.data)
        })
    }, [])

    console.log(restaurantes)

    function Save(dados) {
        axios.post('/api/funcionarios', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        console.log(dados)
        push('/funcionarios')
    }

    return (
        <>
            <Header />
            <Align>
                <Form>
                    <FloatingLabel controlId={"nome"} label="Nome" className="mb-3">
                        <Form.Control type="date"  placeholder="Digite o nome" {...register('nome')} />
                    </FloatingLabel>

                    <Form.Select aria-label="Default select example" {...register('restauranteId')} className='mb-3'>
                        <option>Selecione o Restaurante</option>
                        {restaurantes.map((item, i) => (
                            <option key={i} value={item.id}>{item.razao_social}</option>
                        ))}
                    </Form.Select>

                    <div className='text-center'>
                        <ButtonGroup className="mb-2">
                            <Button variant="warning" onClick={handleSubmit(Save)} >Salvar <BsCheck2Square /></Button>
                            <Link href={'/pedidos'} className='btn btn-success'>Voltar <IoMdArrowRoundBack /></Link>
                        </ButtonGroup>
                    </div>
                </Form>
            </Align>
        </>
    )
}

export default form