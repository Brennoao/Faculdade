import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Align from '../../components/Align'
import { BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'
import funcionariosValidator from '../../validators/funcionariosValidator'

const idRestaurante = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const { push, query } = useRouter()

    const [funcionarios, setFuncionarios] = useState([])
    const [mesas, setMesas] = useState([])

    useEffect(() => {
        axios.get('/api/funcionarios').then(resultado => {
            setFuncionarios(resultado.data);
        })
        axios.get('/api/mesas').then(resultado => {
            setMesas(resultado.data);
        })
    }, [])

    useEffect(() => {
        if (query.id) {
            axios.get('/api/pedidos/' + query.id).then(resultado => {
                const pedidos = resultado.data

                for (let atributo in pedidos) {
                    setValue(atributo, pedidos[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/pedidos/' + dados.id, dados)
        console.log(dados)
        push('/pedidos')
    }

    return (
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
                    <Form.Control type="text" placeholder="Digite o formaPagamento" {...register('forma_pagamento')} />
                </FloatingLabel>

                <FloatingLabel controlId={"Data"} label="Data" className="mb-3">
                    <Form.Control type="date" placeholder="Digite o Data" {...register('data')} />
                </FloatingLabel>

                <div className='text-center'>
                    <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                    <Link href={'/funcionarios'} className='btn btn-success ms-2'>Voltar <IoMdArrowRoundBack /></Link>
                </div>
            </Form>
        </Align>
    )
}

export default idRestaurante