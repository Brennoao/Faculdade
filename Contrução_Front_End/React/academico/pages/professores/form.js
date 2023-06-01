import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form, FloatingLabel, ButtonGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { BsCheck2Square } from 'react-icons/Bs';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import axios from 'axios'


const form = () => {

    const { register, handleSubmit } = useForm()
    const { push } = useRouter()                                                                // IMPORT DA FUNÇÃO PUSH PARA A UTILIZAÇÃO

    function salvar(dados) {                                                                       // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        axios.post('/api/professores', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        push('/professores')
    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <FloatingLabel controlId="nome" label="nome:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('nome')}/>
                </FloatingLabel>

                <FloatingLabel controlId="cpf:" label="cpf:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('cpf')}/>
                </FloatingLabel>

                <FloatingLabel controlId="matricula:" label="matricula:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('matricula')}/>
                </FloatingLabel>
                
                <FloatingLabel controlId="salario:" label="salario:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('salario')}/>
                </FloatingLabel>
                
                <FloatingLabel controlId="email:" label="email:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('email')}/>
                </FloatingLabel>
                
                <FloatingLabel controlId="telefone:" label="telefone:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('telefone')}/>
                </FloatingLabel>
                
                <FloatingLabel controlId="cep:" label="cep:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('cep')}/>
                </FloatingLabel>
                
                <FloatingLabel controlId="logradouro:" label="logradouro:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('logradouro')}/>
                </FloatingLabel>
                
                <FloatingLabel controlId="complemento:" label="complemento:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('complemento')}/>
                </FloatingLabel>
                
                <FloatingLabel controlId="numero:" label="numero:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('numero')}/>
                </FloatingLabel>
                
                <FloatingLabel controlId="bairro:" label="bairro:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('bairro')}/>
                </FloatingLabel>
                
                <div className='text-center'>
                    <ButtonGroup className="mb-2">
                        <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                        <Link href={'/professores'} className='btn btn-success'>Voltar <IoMdArrowRoundBack /></Link>
                    </ButtonGroup>
                </div>
            </Form>
        </Pagina>
    )
}

export default form