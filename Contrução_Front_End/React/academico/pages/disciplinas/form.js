import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form, FloatingLabel, ButtonGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheck2Square } from 'react-icons/Bs';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import axios from 'axios'


const form = () => {

    const { push } = useRouter()                                                                // IMPORT DA FUNÇÃO PUSH PARA A UTILIZAÇÃO
    const { register, handleSubmit } = useForm()

    function salvar(dados) {
        axios.post('/api/disciplinas', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        push('/disciplinas')
    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <FloatingLabel controlId="nome" label="nome:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('nome')} />
                </FloatingLabel>

                <FloatingLabel controlId="curso:" label="curso:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('curso')} />
                </FloatingLabel>

                <div className='text-center'>
                    {/* <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                    <Link href={'/disciplinas'} className='btn btn-success ms-2'>Voltar <IoMdArrowRoundBack /></Link> */}
                    <ButtonGroup className="mb-2">
                        <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                        <Link href={'/disciplinas'} className='btn btn-success'>Voltar <IoMdArrowRoundBack /></Link>
                    </ButtonGroup>
                </div>
            </Form>
        </Pagina>
    )
}

export default form