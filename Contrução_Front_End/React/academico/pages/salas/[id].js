import Pagina from '@/components/Pagina'
import salasValidator from '@/validators/salasValidator'
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

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const { push, query } = useRouter()

    useEffect(() => {
        if (query.id) {
            axios.get('/api/salas/' + query.id).then(resultado => {
                const sala = resultado.data

                for (let atributo in sala) {
                    setValue(atributo, sala[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/salas/' + dados.id, dados)
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
                    <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                    <Link href={'/salas'} className='btn btn-success ms-2'>Voltar <IoMdArrowRoundBack /></Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form