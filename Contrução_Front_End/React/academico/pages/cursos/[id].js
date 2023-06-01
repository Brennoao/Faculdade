import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheck2Square } from 'react-icons/Bs';
import { IoMdArrowRoundBack } from 'react-icons/Io';


const form = () => {

    const { register, handleSubmit, setValue } = useForm()
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
                
                for(let atributo in curso){
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
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração:</Form.Label>
                    <Form.Control type="text" {...register('duracao')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>modalidade:</Form.Label>
                    <Form.Control type="text" {...register('modalidade')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                    <Link href={'/cursos'} className='btn btn-success ms-2'>Voltar <IoMdArrowRoundBack /></Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form