import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { Button, ButtonGroup, Form, FloatingLabel } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Align from '../../components/Align'
import { useRouter } from 'next/router';
import { BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'
import fornecedoresValidator from '../../validators/fornecedoresValidator'

const form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { push } = useRouter();

    function Save(dados) {
        axios.post('/api/fornecedores', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        console.log(dados)
        push('/fornecedores')
    }

    return (
        <>
            <Align>
                <Form>
                    <FloatingLabel controlId={"razaoSocial"} label="Razão Social" className="mb-3">
                        <Form.Control type="number" isInvalid={errors.razaoSocial} placeholder="Digite o razaoSocial" {...register('inscricao_estadual', fornecedoresValidator.RazãoSocial)} />
                        {errors.razaoSocial && <small className='text-danger'>{errors.razaoSocial.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"cnpj"} label="Cnpj" className="mb-3">
                        <Form.Control type="text" isInvalid={errors.cnpj} placeholder="Digite o cnpj" {...register('razao_social', fornecedoresValidator.Cnpj)} />
                        {errors.cnpj && <small className='text-danger'>{errors.cnpj.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"cep"} label="Celular" className="mb-3">
                        <Form.Control type="tell" isInvalid={errors.celular} placeholder="Digite o celular" {...register('celular', fornecedoresValidator.Celular)} />
                        {errors.celular && <small className='text-danger'>{errors.celular.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"cep"} label="Cep" className="mb-3">
                        <Form.Control type="tell" isInvalid={errors.cep} placeholder="Digite o cep" {...register('cep', fornecedoresValidator.Cep)} />
                        {errors.cep && <small className='text-danger'>{errors.cep.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"endereco"} label="Endereço" className="mb-3">
                        <Form.Control type="tell" isInvalid={errors.endereco} placeholder="Digite o endereco" {...register('endereco', fornecedoresValidator.Endereco)} />
                        {errors.endereco && <small className='text-danger'>{errors.endereco.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"produtos"} label="Produtos" className="mb-3">
                        <Form.Control type="tell" isInvalid={errors.produtos} placeholder="Digite o produtos" {...register('produtos', fornecedoresValidator.Produtos)} />
                        {errors.produtos && <small className='text-danger'>{errors.produtos.message}</small>}
                    </FloatingLabel>

                    <div className='text-center'>
                        <ButtonGroup className="mb-2">
                            <Button variant="warning" onClick={handleSubmit(Save)} >Salvar <BsCheck2Square /></Button>
                            <Link href={'/fornecedores'} className='btn btn-success'>Voltar <IoMdArrowRoundBack /></Link>
                        </ButtonGroup>
                    </div>
                </Form>
            </Align>
        </>
    )
}

export default form