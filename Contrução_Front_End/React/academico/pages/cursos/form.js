import Pagina from '@/components/Pagina'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const form = () => {

    const { register, handleSubmit }  = useForm()

    function salvar(dados) {
        console.log(dados)
    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" placeholder="Nome" {...register('nome')}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração:</Form.Label>
                    <Form.Control type="text" placeholder="duração" {...register('duracao')}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>modalidade:</Form.Label>
                    <Form.Control type="text" placeholder="modalidade" {...register('modalidade')}/>
                </Form.Group>

                <Button variant="warning" onClick={handleSubmit(salvar)} >
                    Salvar
                </Button>
            </Form>
        </Pagina>
    )
}

export default form