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
            axios.get('/api/semestres/' + query.id).then(resultado => {
                const curso = resultado.data

                for (let atributo in curso) {
                    setValue(atributo, curso[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/semestres/' + dados.id, dados)
        push('/semestres')
    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <FloatingLabel controlId="nome" label="nome:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('nome')} />
                </FloatingLabel>

                <FloatingLabel controlId="dataInicio:" label="dataInicio:" className="mb-3">
                    <Form.Control type="date" placeholder="name@example.com" {...register('dataInicio')} />
                </FloatingLabel>

                <FloatingLabel controlId="dataFim:" label="dataFim:" className="mb-3">
                    <Form.Control type="date" placeholder="name@example.com" {...register('dataFim')} />
                </FloatingLabel>

                <div className='text-center'>
                    <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                    <Link href={'/semestres'} className='btn btn-success ms-2'>Voltar <IoMdArrowRoundBack /></Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form