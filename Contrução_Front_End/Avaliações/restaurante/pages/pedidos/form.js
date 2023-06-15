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
import { unmask } from 'remask'

const form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { push } = useRouter();

    const [funcionarios, setFuncionarios] = useState([])
    const [mesas, setMesas] = useState([])
    const [restaurantes, setRestaurantes] = useState([])

    useEffect(() => {
        axios.get('/api/restaurante').then(resultado => {
            setRestaurantes(resultado.data);
            // console.log(resultado.data)
        })
        axios.get('/api/funcionarios').then(resultado => {
            setFuncionarios(resultado.data);
            // console.log(resultado.data)
        })
        axios.get('/api/mesas').then(resultado => {
            setMesas(resultado.data);
            // console.log(resultado.data)
        })
    }, [])

    console.log(funcionarios, mesas)

    function Save(dados) {
        dados.data = unmask(dados.data)
        axios.post('/api/pedidos', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        console.log(dados)
        push('/pedidos')
    }

    return (
        <>
            <Header />
            <Align>
                <Form>
                    <Form.Select aria-label="Default select example" {...register('mesaId')} className='mb-3'>
                        <option>Selecione o Mesas</option>
                        {mesas.map(item => (
                            <option key={item.id} value={item.id}>{item.id}</option>
                        ))}
                    </Form.Select>

                    <Form.Select aria-label="Default select example" {...register('funcionarioId')} className='mb-3'>
                        <option>Selecione o Funcionarios</option>
                        {funcionarios.map(item => (
                            <option key={item.id} value={item.id}>{item.nome}</option>
                        ))}
                    </Form.Select>

                    <FloatingLabel controlId={"formaPagamento"} label="Forma de Pagamento" className="mb-3">
                        <Form.Control type="text"  placeholder="Digite o formaPagamento" {...register('formaPagamento')} />
                    </FloatingLabel>

                    <FloatingLabel controlId={"Data"} label="Data" className="mb-3">
                        <Form.Control type="date"  placeholder="Digite o Data" {...register('data')} />
                    </FloatingLabel>

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