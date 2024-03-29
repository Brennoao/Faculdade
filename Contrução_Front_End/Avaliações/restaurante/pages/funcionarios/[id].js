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
import { mask, unmask } from 'remask'
import Cargos from '../../components/Cargos'

const idRestaurante = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const { push, query } = useRouter()

    const [restaurantes, setRestaurantes] = useState([])
    const [funcionarios, setFuncionarios] = useState([])

    useEffect(() => {
        axios.get('/api/restaurante').then(resultado => {
            setRestaurantes(resultado.data);
            // console.log(resultado.data)
        })
    }, [])

    useEffect(() => {
        if (query.id) {
            axios.get('/api/funcionarios/' + query.id).then(resultado => {
                const Funcionarios = resultado.data
                console.log(Funcionarios)

                for (let atributo in Funcionarios) {
                    setValue(atributo, Funcionarios[atributo])
                }

                setFuncionarios(restaurantes)
            })
        }
    }, [query.id])

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const Mascara = event.target.getAttribute('mask')

        setValue(name, mask(value, Mascara))
    }

    function salvar(dados) {
        dados.cpf = unmask(dados.cpf); dados.registro_geral = unmask(dados.registro_geral)
        axios.put('/api/funcionarios/' + dados.id, dados)
        push('/funcionarios')
    }

    return (
        <Align>
            <Form>
            <FloatingLabel controlId={"nome"} label="Nome" className="mb-3">
                        <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', funcionariosValidator.nome)} />
                        {errors.nome && <small className='text-danger'>{errors.nome.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"cpf"} label="CPF" className="mb-3">
                        <Form.Control type="text" mask='999.999.999-99' isInvalid={errors.cpf} placeholder="Digite o cpf" {...register('cpf', funcionariosValidator.cpf)} onChange={handleChange}/>
                        {errors.cpf && <small className='text-danger'>{errors.cpf.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"registroGeral"} label="Registro Geral" className="mb-3">
                        <Form.Control type="text" mask='999.999-9' isInvalid={errors.registroGeral} placeholder="Digite o registroGeral" {...register('registro_geral', funcionariosValidator.registroGeral)} onChange={handleChange}/>
                        {errors.registroGeral && <small className='text-danger'>{errors.registroGeral.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"email"} label="Email" className="mb-3">
                        <Form.Control type="email" isInvalid={errors.email} placeholder="Digite o email" {...register('email', funcionariosValidator.email)} />
                        {errors.email && <small className='text-danger'>{errors.email.message}</small>}
                    </FloatingLabel>

                    <Form.Select aria-label="Default select example" {...register('cargo')} className='mb-3'>
                        <option>Selecione o Cargo</option>
                        {Cargos.map((item, i) => (
                            <option key={i} value={item.nome}>{item.nome}</option>
                        ))}
                    </Form.Select>

                    <FloatingLabel controlId={"senha"} label="Senha" className="mb-3">
                        <Form.Control type="password" isInvalid={errors.senha} placeholder="Digite o senha" {...register('senha', funcionariosValidator.senha)} />
                        {errors.senha && <small className='text-danger'>{errors.senha.message}</small>}
                    </FloatingLabel>

                <Form.Select aria-label="Default select example" {...register('restaurante_id')} className='mb-3'>
                    <option>Selecione o Restaurante</option>
                    {restaurantes.map(item => (
                        <option key={item.id} value={item.id} selected={item.id == funcionarios.restaurante_id ? true : false}>
                            {item.razao_social}
                        </option>
                    ))}
                </Form.Select>

                <div className='text-center'>
                    <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                    <Link href={'/funcionarios'} className='btn btn-success ms-2'>Voltar <IoMdArrowRoundBack /></Link>
                </div>
            </Form>
        </Align>
    )
}

export default idRestaurante