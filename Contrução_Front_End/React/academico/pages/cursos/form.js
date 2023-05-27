import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form, FloatingLabel } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { BsCheck2Square } from 'react-icons/Bs';
import { IoMdArrowRoundBack } from 'react-icons/Io';


const form = () => {

    const { register, handleSubmit } = useForm()
    const { push } = useRouter()                                                                // IMPORT DA FUNÇÃO PUSH PARA A UTILIZAÇÃO

    function salvar(dados) {
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []

        const id = uuidv4()                                                                     // GERA UM UUID UNICO PARA CADA ITEM

        const cursoComId = { ...dados, id }                                                     // ADICIONA O ID COMO PROPRIEDADE DO ITEM

        cursos.push(cursoComId)                                                                 // IMPORTA PARA O LOCALSTORAGE
        window.localStorage.setItem('cursos', JSON.stringify(cursos))                           // TRANSFORMA O ITEM EM STRING

        push('/cursos')                                                                         // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <FloatingLabel controlId="nome" label="nome:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('nome')}/>
                </FloatingLabel>

                <FloatingLabel controlId="duracao:" label="duracao:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('duracao')}/>
                </FloatingLabel>

                <FloatingLabel controlId="modalidade:" label="modalidade:" className="mb-3">
                    <Form.Control type="text" placeholder="name@example.com" {...register('modalidade')}/>
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