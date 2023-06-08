import Pagina from '@/components/Pagina'
import cursoValidator from '@/validators/cursoValidator'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form, FloatingLabel } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheck2Square } from 'react-icons/Bs';
import { IoMdArrowRoundBack } from 'react-icons/Io';


const form = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const { push, query } = useRouter()

    useEffect(() => {
        // if (query.id) {
        //     const Cursos = JSON.parse(localStorage.getItem('cursos')) || []
        //     const Curso = Cursos[query.id]

        //     for (let atributo in Curso) {
        //         setValue(atributo, Curso[atributo])
        //     }
        // }

        if (query.id) {
            axios.get('/api/cursos/' + query.id).then(resultado => {
                const curso = resultado.data

                for (let atributo in curso) {
                    setValue(atributo, curso[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        // const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []

        // cursos.splice(query.id, 1, dados)
        // window.localStorage.setItem('cursos', JSON.stringify(cursos))               // TRANSFORMA O ITEM EM STRING

        // push('/cursos')                                                       // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        axios.put('/api/cursos/' + dados.id, dados)
        push('/cursos')
    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <FloatingLabel controlId={"nome"} label="Nome" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', cursoValidator.Nome)} />
                    {errors.nome && <small className='text-danger'>{errors.nome.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"duracao"} label="Duração" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.duracao} placeholder="Digite a duração" {...register('duracao', cursoValidator.Duracao)} />
                    {errors.duracao && <small className='text-danger'>{errors.duracao.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"modalidade"} label="Modalidade" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.modalidade} placeholder="Digite a duração" {...register('modalidade', cursoValidator.Modalidade)} />
                    {errors.modalidade && <small className='text-danger'>{errors.modalidade.message}</small>}
                </FloatingLabel>


                <div className='text-center'>
                    <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                    <Link href={'/cursos'} className='btn btn-success ms-2'>Voltar <IoMdArrowRoundBack /></Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form