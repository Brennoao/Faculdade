import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Form, FloatingLabel } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Align from '../../components/Align'
import { useRouter } from 'next/router';
import { BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'
import funcionariosValidator from '../../validators/funcionariosValidator'

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
            <Align>
                <Form>
                    <FloatingLabel controlId={"nome"} label="Nome" className="mb-3">
                        <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', funcionariosValidator.nome)} />
                        {errors.nome && <small className='text-danger'>{errors.nome.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"cpf"} label="CPF" className="mb-3">
                        <Form.Control type="number" isInvalid={errors.cpf} placeholder="Digite o cpf" {...register('cpf', funcionariosValidator.cpf)} />
                        {errors.cpf && <small className='text-danger'>{errors.cpf.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"registro_geral"} label="Registro Geral" className="mb-3">
                        <Form.Control type="number" isInvalid={errors.registro_geral} placeholder="Digite o registro_geral" {...register('registroGeral', funcionariosValidator.registroGeral)} />
                        {errors.registro_geral && <small className='text-danger'>{errors.registro_geral.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"email"} label="Email" className="mb-3">
                        <Form.Control type="email" isInvalid={errors.email} placeholder="Digite o email" {...register('email', funcionariosValidator.email)} />
                        {errors.email && <small className='text-danger'>{errors.email.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"cargo"} label="Cargo" className="mb-3">
                        <Form.Control type="text" isInvalid={errors.cargo} placeholder="Digite o cargo" {...register('cargo', funcionariosValidator.cargo)} />
                        {errors.cargo && <small className='text-danger'>{errors.cargo.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"senha"} label="Senha" className="mb-3">
                        <Form.Control type="password" isInvalid={errors.senha} placeholder="Digite o senha" {...register('senha', funcionariosValidator.senha)} />
                        {errors.senha && <small className='text-danger'>{errors.senha.message}</small>}
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
                            <Link href={'/funcionarios'} className='btn btn-success'>Voltar <IoMdArrowRoundBack /></Link>
                        </ButtonGroup>
                    </div>
                </Form>
            </Align>
        </>
    )
}

export default form