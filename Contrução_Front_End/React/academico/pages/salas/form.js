import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form, FloatingLabel, ButtonGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheck2Square } from 'react-icons/Bs';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import axios from 'axios'
import Test from '../../components/Test';


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
                <Test controlId="nome" label="Nome" placeholder="Digite o nome" register={register('nome')} />
                
                <Test controlId="capacidade" label="Capacidade" placeholder="Digite o capacidade" register={register('capacidade')} />
                
                <Test controlId="tipo" label="Tipo" placeholder="Digite o tipo" register={register('tipo')} />

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