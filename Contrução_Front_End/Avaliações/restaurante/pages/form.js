import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { Button, ButtonGroup, Form, FloatingLabel } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Align from '../components/Align'
import { useRouter } from 'next/router';
import { BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'
import restauranteValidator from '../validators/restauranteValidator'

const form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { push } = useRouter();

    function Save(dados) {
        axios.post('/api/restaurante', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        console.log(dados)
        push('/')
    }

    return (
        <>
            <Align>
                <Form>
                    <FloatingLabel controlId={"cnpj"} label="CNPJ" className="mb-3">
                        <Form.Control type="number" isInvalid={errors.cnpj} placeholder="Digite o cnpj" {...register('cnpj', restauranteValidator.Cnpj)} />
                        {errors.cnpj && <small className='text-danger'>{errors.cnpj.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"inscricaoEstadual"} label="InscricaoEstadual" className="mb-3">
                        <Form.Control type="number" isInvalid={errors.inscricaoEstadual} placeholder="Digite o inscricaoEstadual" {...register('inscricao_estadual', restauranteValidator.InscricaoEstadual)} />
                        {errors.inscricaoEstadual && <small className='text-danger'>{errors.inscricaoEstadual.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"razaoSocial"} label="RazaoSocial" className="mb-3">
                        <Form.Control type="text" isInvalid={errors.razaoSocial} placeholder="Digite o razaoSocial" {...register('razao_social', restauranteValidator.RazaoSocial)} />
                        {errors.razaoSocial && <small className='text-danger'>{errors.razaoSocial.message}</small>}
                    </FloatingLabel>

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