import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form, FloatingLabel, ButtonGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheck2Square } from 'react-icons/Bs';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import axios from 'axios'
import semestreValidator from '@/validators/semestreValidator'


const form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { push } = useRouter()                                                                // IMPORT DA FUNÇÃO PUSH PARA A UTILIZAÇÃO

    function salvar(dados) {
        axios.post('/api/semestres', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        push('/semestres')
    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <FloatingLabel controlId={"nome"} label="Nome" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', semestreValidator)} />
                    {errors.nome && <small className='text-danger'>{errors.nome.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId="dataInicio:" label="dataInicio:" className="mb-3">
                    <Form.Control type="date" placeholder="name@example.com" {...register('dataInicio')} />
                </FloatingLabel>

                <FloatingLabel controlId="dataFim:" label="dataFim:" className="mb-3">
                    <Form.Control type="date" placeholder="name@example.com" {...register('dataFim')} />
                </FloatingLabel>

                <div className='text-center'>
                    <ButtonGroup className="mb-2">
                        <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                        <Link href={'/semestres'} className='btn btn-success'>Voltar <IoMdArrowRoundBack /></Link>
                    </ButtonGroup>
                </div>
            </Form>
        </Pagina>
    )
}

export default form