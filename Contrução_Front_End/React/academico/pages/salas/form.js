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

    function salvar(dados) {
        axios.post('/api/salas', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        push('/salas')
    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <FloatingLabel controlId="nome" label="nome:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('nome')}/>
                </FloatingLabel>

                <FloatingLabel controlId="capacidade:" label="capacidade:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('capacidade')}/>
                </FloatingLabel>

                <FloatingLabel controlId="tipo:" label="tipo:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('tipo')}/>
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