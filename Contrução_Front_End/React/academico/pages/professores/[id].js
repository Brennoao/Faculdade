import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { FloatingLabel } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheck2Square } from 'react-icons/Bs';
import { IoMdArrowRoundBack } from 'react-icons/Io';


const form = () => {

    const { register, handleSubmit, setValue } = useForm()
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

    function salvar(dados) {                                                     // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        axios.put('/api/professores/' + dados.id, dados)
        push('/professores')
    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <FloatingLabel controlId="nome" label="nome:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('nome')} />
                </FloatingLabel>

                <FloatingLabel controlId="cpf:" label="cpf:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('cpf')} />
                </FloatingLabel>

                <FloatingLabel controlId="matricula:" label="matricula:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('matricula')} />
                </FloatingLabel>

                <FloatingLabel controlId="salario:" label="salario:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('salario')} />
                </FloatingLabel>

                <FloatingLabel controlId="email:" label="email:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('email')} />
                </FloatingLabel>

                <FloatingLabel controlId="telefone:" label="telefone:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('telefone')} />
                </FloatingLabel>

                <FloatingLabel controlId="cep:" label="cep:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('cep')} />
                </FloatingLabel>

                <FloatingLabel controlId="logradouro:" label="logradouro:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('logradouro')} />
                </FloatingLabel>

                <FloatingLabel controlId="complemento:" label="complemento:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('complemento')} />
                </FloatingLabel>

                <FloatingLabel controlId="numero:" label="numero:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('numero')} />
                </FloatingLabel>

                <FloatingLabel controlId="bairro:" label="bairro:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('bairro')} />
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