import Pagina from '@/components/Pagina'
import professoresValidator from '@/validators/professoresValidator'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { FloatingLabel } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheck2Square } from 'react-icons/Bs';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import { mask } from 'remask'

const form = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { push, query } = useRouter()

    useEffect(() => {
        if (query.id) {
            axios.get('/api/professores/' + query.id).then(resultado => {
                const curso = resultado.data

                for (let atributo in curso) {
                    setValue(atributo, curso[atributo])
                }
            })
        }
    }, [query.id])

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const Mascara = event.target.getAttribute('mask')

        setValue(name, mask(value, Mascara))
    }

    function salvar(dados) {                                                     // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        axios.put('/api/professores/' + dados.id, dados)
        push('/professores')
    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <FloatingLabel controlId={"nome"} label="Nome" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', professoresValidator.Nome)} />
                    {errors.nome && <small className='text-danger'>{errors.nome.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"cpf"} label="CPF" className="mb-3">
                    <Form.Control type="text" mask='999.999.999-99' isInvalid={errors.cpf} placeholder="Digite o cpf" {...register('cpf', professoresValidator.Cpf)} onChange={handleChange} />
                    {errors.cpf && <small className='text-danger'>{errors.cpf.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"matricula"} label="Matricula" className="mb-3">
                    <Form.Control type="number" isInvalid={errors.matricula} placeholder="Digite o matricula" {...register('matricula', professoresValidator.Matricula)} />
                    {errors.matricula && <small className='text-danger'>{errors.matricula.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"salario"} label="Salario" className="mb-3">
                    <Form.Control type="number" isInvalid={errors.salario} placeholder="Digite o salario" {...register('salario', professoresValidator.salario)} />
                    {errors.salario && <small className='text-danger'>{errors.salario.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"email"} label="Email" className="mb-3">
                    <Form.Control type="email" isInvalid={errors.email} placeholder="Digite o email" {...register('email', professoresValidator.Email)} />
                    {errors.email && <small className='text-danger'>{errors.email.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"telefone"} label="Telefone" className="mb-3">
                    <Form.Control type="tell" mask='(99) 99999-9999' isInvalid={errors.telefone} placeholder="Digite o telefone" {...register('telefone', professoresValidator.Telefone)} onChange={handleChange} />
                    {errors.telefone && <small className='text-danger'>{errors.telefone.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"cep"} label="CEP" className="mb-3">
                    <Form.Control type="number" isInvalid={errors.cep} placeholder="Digite o cep" {...register('cep', professoresValidator.Cep)} />
                    {errors.cep && <small className='text-danger'>{errors.cep.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"logradouro"} label="Logradouro" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.logradouro} placeholder="Digite o logradouro" {...register('logradouro')} />
                    {errors.logradouro && <small className='text-danger'>{errors.logradouro.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"complemento"} label="Complemento" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.complemento} placeholder="Digite o complemento" {...register('complemento')} />
                    {errors.complemento && <small className='text-danger'>{errors.complemento.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"numero"} label="Número" className="mb-3">
                    <Form.Control type="number" isInvalid={errors.numero} placeholder="Digite o numero" {...register('numero', professoresValidator.Numero)} />
                    {errors.numero && <small className='text-danger'>{errors.numero.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"bairro"} label="Bairro" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.bairro} placeholder="Digite o bairro" {...register('bairro')} />
                    {errors.bairro && <small className='text-danger'>{errors.bairro.message}</small>}
                </FloatingLabel>

                <div className='text-center'>
                    <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                    <Link href={'/professores'} className='btn btn-success ms-2'>Voltar <IoMdArrowRoundBack /></Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form