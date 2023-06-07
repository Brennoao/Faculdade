import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { Button, ButtonGroup, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Align from '../components/Align'
import MyForm from '../components/MyForm'
import { BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'

const form = () => {
    const { register, handleSubmit } = useForm()

    function Save(dados) {
        console.log(dados)
        axios.post('/api/restaurante', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        // push('/alunos')
    }

    return (
        <>
            <Align>
                <Form>
                    <MyForm controlId='cnpj' label='CNPJ:' Type='number' placeholder='Número CNPJ' register={register('cnpj')} />

                    <MyForm controlId='inscricaoEstadual' Type='number' label='Inscricão Estadual:' placeholder='Número inscrição Estadual' register={register('inscricaoEstadual')} />

                    <MyForm controlId='razaoSocial' label='Razão Social:' placeholder='Nome Razão Social' register={register('razaoSocial')} />

                    <div className='text-center'>
                        <ButtonGroup className="mb-2">
                            <Button variant="warning" onClick={handleSubmit(Save)} >Salvar <BsCheck2Square /></Button>
                            <Link href={'/'} className='btn btn-success'>Voltar <IoMdArrowRoundBack /></Link>
                        </ButtonGroup>
                    </div>
                </Form>
            </Align>
        </>
    )
}

export default form