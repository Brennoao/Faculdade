import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Align from '../../components/Align'
import restauranteValidator from '../../validators/restauranteValidator'
import { BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'

const idRestaurante = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const { push, query } = useRouter()

    useEffect(() => {
        if (query.id) {
            axios.get('/api/restaurante/' + query.id).then(resultado => {
                const alunos = resultado.data

                for (let atributo in alunos) {
                    setValue(atributo, alunos[atributo])
                    console.log(atributo)
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/restaurante/' + dados.id, dados)
        console.log(dados)
        // push('/restaurante')
    }

    return (
        <Align>
            <Form>
                <FloatingLabel controlId={"cnpj"} label="CNPJ" className="mb-3">
                    <Form.Control type="number" isInvalid={errors.cnpj} placeholder="Digite o cnpj" {...register('cnpj', restauranteValidator.Cnpj)} />
                    {errors.cnpj && <small className='text-danger'>{errors.cnpj.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"inscricao_estadual"} label="Inscricao Estadual" className="mb-3">
                    <Form.Control type="number" isInvalid={errors.inscricaoEstadual} placeholder="Digite o inscricaoEstadual" {...register('inscricao_estadual', restauranteValidator.InscricaoEstadual)} />
                    {errors.inscricaoEstadual && <small className='text-danger'>{errors.inscricaoEstadual.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"razao_social"} label="Razao Social" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.razaoSocial} placeholder="Digite o razaoSocial" {...register('razao_social', restauranteValidator.RazaoSocial)} />
                    {errors.razaoSocial && <small className='text-danger'>{errors.razaoSocial.message}</small>}
                </FloatingLabel>

                <div className='text-center'>
                    <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                    <Link href={'/restaurante'} className='btn btn-success ms-2'>Voltar <IoMdArrowRoundBack /></Link>
                </div>
            </Form>
        </Align>
    )
}

export default idRestaurante