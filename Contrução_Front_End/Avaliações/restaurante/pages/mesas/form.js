import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Form, FloatingLabel } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Align from '../../components/Align'
import { useRouter } from 'next/router';
import { BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'
import mesasValidator from '../../validators/mesasValidator'

const form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { push } = useRouter();

    const [restaurantes, setRestaurantes] = useState([])

    useEffect(() => {
        axios.get('/api/restaurante').then(resultado => {
            setRestaurantes(resultado.data);
            console.log(resultado.data)
        })
    }, [])

    function Save(dados) {
        axios.post('/api/mesas', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        console.log(dados)
        push('/mesas')
    }

    return (
        <>
            <Align>
                <Form>
                    <FloatingLabel controlId={"numero"} label="Numero" className="mb-3">
                        <Form.Control type="text" isInvalid={errors.numero} placeholder="Digite o numero" {...register('numero', mesasValidator.Numero)} />
                        {errors.numero && <small className='text-danger'>{errors.numero.message}</small>}
                    </FloatingLabel>

                    <Form.Select aria-label="Default select example" {...register('restauranteId', mesasValidator.restaurante)} className='mb-3'>
                        <option>Selecione o Restaurante</option>
                        {restaurantes.map(item => (
                            <option key={item.id} value={item.id}>{item.razao_social}</option>
                        ))}
                    </Form.Select>

                    <div className='text-center'>
                        <ButtonGroup className="mb-2">
                            <Button variant="warning" onClick={handleSubmit(Save)} >Salvar <BsCheck2Square /></Button>
                            <Link href={'/mesas'} className='btn btn-success'>Voltar <IoMdArrowRoundBack /></Link>
                        </ButtonGroup>
                    </div>
                </Form>
            </Align>
        </>
    )
}

export default form