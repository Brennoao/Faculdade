import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Align from '../../components/Align'
import { BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'
import fornecedoresValidator from '../../validators/fornecedoresValidator'

const idRestaurante = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const { push, query } = useRouter()

    const [restaurantes, setRestaurantes] = useState([])

    useEffect(() => {
        axios.get('/api/restaurante').then(resultado => {
            setRestaurantes(resultado.data);
            // console.log(resultado.data)
        })
    }, [])

    useEffect(() => {
        if (query.id) {
            axios.get('/api/mesas/' + query.id).then(resultado => {
                const Mesas = resultado.data

                for (let atributo in Mesas) {
                    setValue(atributo, Mesas[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/mesas/' + dados.id, dados)
        console.log(dados)
        push('/mesas')
    }

    return (
        <Align>
            <Form>
                <FloatingLabel controlId={"numero"} label="Numero" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.numero} placeholder="Digite o numero" {...register('numero', fornecedoresValidator.Numero)} />
                    {errors.numero && <small className='text-danger'>{errors.numero.message}</small>}
                </FloatingLabel>

                <Form.Select aria-label="Default select example" {...register('restauranteId')} className='mb-3'>
                    <option>Selecione o Restaurante</option>
                    {restaurantes.map((item, i) => (
                        <option key={i} value={item.id}>{item.razao_social}</option>
                    ))}
                </Form.Select>

                <div className='text-center'>
                    <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                    <Link href={'/tipos'} className='btn btn-success ms-2'>Voltar <IoMdArrowRoundBack /></Link>
                </div>
            </Form>
        </Align>
    )
}

export default idRestaurante