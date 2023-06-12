import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Form, FloatingLabel } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Align from '../../components/Align'
import { useRouter } from 'next/router';
import { BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'
import produtosValidator from '../../validators/produtosValidator'


const form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { push } = useRouter();

    const [fornecedores, setFornecedores] = useState([])
    const [tipos, setTipos] = useState([])

    useEffect(() => {
        axios.get('/api/fornecedores').then(resultado => {
            setFornecedores(resultado.data);
        })
        axios.get('/api/tipos').then(resultado => {
            setTipos(resultado.data);
        })
    }, [])

    function Save(dados) {
        axios.post('/api/produtos', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        console.log(dados)
        push('/produtos')
    }

    return (
        <>
            <Align>
                <Form>
                    <FloatingLabel controlId={"nome"} label="Nome" className="mb-3">
                        <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', produtosValidator.nome)} />
                        {errors.nome && <small className='text-danger'>{errors.nome.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"quantidade"} label="Quantidade" className="mb-3">
                        <Form.Control type="number" isInvalid={errors.quantidade} placeholder="Digite o quantidade" {...register('quantidade', produtosValidator.quantidade)} />
                        {errors.quantidade && <small className='text-danger'>{errors.quantidade.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"caloria"} label="Caloria" className="mb-3">
                        <Form.Control type="number" isInvalid={errors.caloria} placeholder="Digite o caloria" {...register('caloria', produtosValidator.caloria)} />
                        {errors.caloria && <small className='text-danger'>{errors.caloria.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"valor"} label="Valor" className="mb-3">
                        <Form.Control type="number" isInvalid={errors.valor} placeholder="Digite o valor" {...register('valor', produtosValidator.valor)} />
                        {errors.valor && <small className='text-danger'>{errors.valor.message}</small>}
                    </FloatingLabel>

                    <Form.Select aria-label="Default select example" {...register('fornecedoreId')} className='mb-3'>
                        <option>Selecione o Fornecedor</option>
                        {fornecedores.map((item, i) => (
                            <option key={i} value={item.id}>{item.razao_social}</option>
                        ))}
                    </Form.Select>

                    <Form.Select aria-label="Default select example" {...register('tipoId')} className='mb-3'>
                        <option>Selecione o Tipo</option>
                        {tipos.map((item, i) => (
                            <option key={i} value={item.id}>{item.nome}</option>
                        ))}
                    </Form.Select>

                    <div className='text-center'>
                        <ButtonGroup className="mb-2">
                            <Button variant="warning" onClick={handleSubmit(Save)} >Salvar <BsCheck2Square /></Button>
                            <Link href={'/produtos'} className='btn btn-success'>Voltar <IoMdArrowRoundBack /></Link>
                        </ButtonGroup>
                    </div>
                </Form>
            </Align>
        </>
    )
}

export default form