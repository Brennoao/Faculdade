import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { BsCheck2Square } from 'react-icons/Bs';
import { IoMdArrowRoundBack } from 'react-icons/Io';


const form = () => {
    // TENTATIVA FALHA
    // function salvar(dados) {
    //     const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    //     var id = v4(dados)
    //     id = {id : [dados]}
    //     cursos.push(id)
    //     console.log(id)

    //     window.localStorage.setItem('cursos', JSON.stringify(cursos))
    //     // push('/cursos')
    //     console.log(dados)
    // }

    // CÓDIGO CORRETO

    const { register, handleSubmit, setValue } = useForm()
    const { push, query } = useRouter()

    useEffect(() => {
        if (query.id) {
            const Cursos = JSON.parse(localStorage.getItem('cursos')) || []
            const Curso = Cursos[query.id]

            setValue('nome', Curso.nome)
            setValue('duracao', Curso.duracao)
            setValue('modalidade', Curso.modalidade)
        }
    }, [query.id])

    function salvar(dados) {
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []

        const id = uuidv4() // GERA UM UUID UNICO PARA CADA ITEM

        const cursoComId = { ...dados, id } // ADICIONA O ID COMO PROPRIEDADE DO ITEM

        cursos.push(cursoComId) // IMPORTA PARA O LOCALSTORAGE
        window.localStorage.setItem('cursos', JSON.stringify(cursos)) // TRANSFORMA O ITEM EM STRING

        push('/cursos') // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" placeholder="Nome" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração:</Form.Label>
                    <Form.Control type="text" placeholder="duração" {...register('duracao')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>modalidade:</Form.Label>
                    <Form.Control type="text" placeholder="modalidade" {...register('modalidade')} />
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