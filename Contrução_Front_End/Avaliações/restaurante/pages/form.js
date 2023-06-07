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
    const { handleSubmit } = useForm()

    function Save(dados) {
        console.log(axios.post('http://127.0.0.1:3333/Restaurante', dados))
        axios.post('http://127.0.0.1:3333/Restaurante', dados)
    }

    return (
        <>
            <Align>
                <Form>
                    <MyForm controlId='cnpj' label='CNPJ:' Type='number' placeholder='Número CNPJ' register='cnpj' />

                    <MyForm controlId='inscricao_estadual' Type='number' label='Inscricão Estadual:' placeholder='Número inscrição Estadual' register='inscricao_estadual' />

                    <MyForm controlId='razao_social' label='Razão Social:' placeholder='Nome Razão Social' register='razao_social' />

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