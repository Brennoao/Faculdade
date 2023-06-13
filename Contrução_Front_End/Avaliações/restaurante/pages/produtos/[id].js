import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Align from '../../components/Align'
import { BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'
import produtosValidator from '../../validators/produtosValidator'

const idRestaurante = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const { push, query } = useRouter()

    const [fornecedores, setFornecedores] = useState([])
    const [tipos, setTipos] = useState([])

console.log(fornecedores, tipos)

    useEffect(() => {
        axios.get('/api/fornecedores').then(resultado => {
            setFornecedores(resultado.data);
        })
        axios.get('/api/tipos').then(resultado => {
            setTipos(resultado.data);
        })
    }, [])

    useEffect(() => {
        if (query.id) {
            axios.get('/api/produtos/' + query.id).then(resultado => {
                const alunos = resultado.data

                for (let atributo in alunos) {
                    setValue(atributo, alunos[atributo])
                //    console.log(atributo)
                }
                console.log(resultado.data)
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/produtos/' + dados.id, dados)
        // console.log(dados)
        push('/produtos')
    }
    
    return (
        <Align>
            <Form>
                <FloatingLabel controlId={"nome"} label="Nome" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', produtosValidator.nome)} />
                    {errors.nome && <small className='text-danger'>{errors.nome.message}</small>}
                </FloatingLabel>
                <input {...register("fornecedore_id")} />
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

                <Form.Select aria-label="Default select example" {...register('fornecedore_id')} className='mb-3'>
                    {/* <option>Selecione o Fornecedor</option> */}
                    {fornecedores.map(item => (
                        <option key={item.id} value={item.id}>{item.razao_social}</option>
                    ))}
                </Form.Select>
                        
                <Form.Select aria-label="Default select example" className='mb-3'>
                        <option value={'...register("tipo_id")'}></option>
                    {tipos.map(item => (
                        <option defaultChecked={...register('fornecedore_id')} key={item.id} value={item.id}>{item.nome}</option>
                    ))}
                </Form.Select>

                <div className='text-center'>
                    <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                    <Link href={'/produtos'} className='btn btn-success ms-2'>Voltar <IoMdArrowRoundBack /></Link>
                </div>
            </Form>
        </Align>
    )
}

export default idRestaurante