import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Form, FloatingLabel } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Align from '../../components/Align'
import { useRouter } from 'next/router';
import { BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'
import fornecedoresValidator from '../../validators/fornecedoresValidator'

const form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { push } = useRouter();

    function Save(dados) {
        axios.post('/api/tipos', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        console.log(dados)
        push('/tipos')
    }

    return (
        <>
            <Align>
                <Form>
                    <FloatingLabel controlId={"nome"} label="Nome" className="mb-3">
                        <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', fornecedoresValidator.Nome)} />
                        {errors.nome && <small className='text-danger'>{errors.nome.message}</small>}
                    </FloatingLabel>

                    <div className='text-center'>
                        <ButtonGroup className="mb-2">
                            <Button variant="warning" onClick={handleSubmit(Save)} >Salvar <BsCheck2Square /></Button>
                            <Link href={'/fornecedores'} className='btn btn-success'>Voltar <IoMdArrowRoundBack /></Link>
                        </ButtonGroup>
                    </div>
                </Form>
            </Align>
        </>
    )
}

export default form