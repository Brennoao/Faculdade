import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form, FloatingLabel, ButtonGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheck2Square } from 'react-icons/Bs';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import axios from 'axios'
import salasValidator from '@/validators/salasValidator'


const form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { push } = useRouter()                                                                // IMPORT DA FUNÇÃO PUSH PARA A UTILIZAÇÃO

    function salvar(dados) {
        axios.post('/api/salas', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        push('/salas')
    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <FloatingLabel controlId={"nome"} label="Nome" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', salasValidator.Nome)} />
                    {errors.nome && <small className='text-danger'>{errors.nome.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"capacidade"} label="Capacidade" className="mb-3">
                    <Form.Control type="number" isInvalid={errors.capacidade} placeholder="Digite o capacidade" {...register('capacidade', salasValidator.Capacidade)} />
                    {errors.capacidade && <small className='text-danger'>{errors.capacidade.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"tipo"} label="Tipo" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.tipo} placeholder="Digite o tipo" {...register('tipo', salasValidator.Tipo)} />
                    {errors.tipo && <small className='text-danger'>{errors.tipo.message}</small>}
                </FloatingLabel>

                <div className='text-center'>
                    <ButtonGroup className="mb-2">
                        <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                        <Link href={'/cursos'} className='btn btn-success'>Voltar <IoMdArrowRoundBack /></Link>
                    </ButtonGroup>
                </div>
            </Form>
        </Pagina>
    )
}

export default form