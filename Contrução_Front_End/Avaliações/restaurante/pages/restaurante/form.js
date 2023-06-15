import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { Button, ButtonGroup, Form, FloatingLabel } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Align from '../../components/Align'
import { useRouter } from 'next/router';
import { BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'
import restauranteValidator from '../../validators/restauranteValidator'
import { mask, unmask } from 'remask'


const form = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const { push } = useRouter();

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const Mascara = event.target.getAttribute('mask')

        setValue(name, mask(value, Mascara))
    }

    function Save(dados) {
        dados.cnpj = unmask(dados.cnpj); dados.inscricaoEstadual = unmask(dados.inscricaoEstadual)
        axios.post('/api/restaurante', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        push('/restaurante')
    }
    
    return (
        <>
            <Align>
                <Form>
                    <FloatingLabel controlId={"cnpj"} label="CNPJ" className="mb-3">
                        <Form.Control type="text" mask='99.999.999/9999-99' isInvalid={errors.cnpj} placeholder="Digite o cnpj" {...register('cnpj', restauranteValidator.Cnpj)} onChange={handleChange} />
                        {errors.cnpj && <small className='text-danger'>{errors.cnpj.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"inscricaoEstadual"} label="Inscricao Estadual" className="mb-3">
                        <Form.Control type="text" mask='9999999999-99' isInvalid={errors.inscricaoEstadual} placeholder="Digite o inscricaoEstadual" {...register('inscricaoEstadual', restauranteValidator.InscricaoEstadual)} onChange={handleChange}/>
                        {errors.inscricaoEstadual && <small className='text-danger'>{errors.inscricaoEstadual.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"razaoSocial"} label="RazaoSocial" className="mb-3">
                        <Form.Control type="text" isInvalid={errors.razaoSocial} placeholder="Digite o razaoSocial" {...register('razaoSocial', restauranteValidator.RazaoSocial)} />
                        {errors.razaoSocial && <small className='text-danger'>{errors.razaoSocial.message}</small>}
                    </FloatingLabel>

                    <div className='text-center'>
                        <ButtonGroup className="mb-2">
                            <Button variant="warning" onClick={handleSubmit(Save)} >Salvar <BsCheck2Square /></Button>
                            <Link href={'/restaurante'} className='btn btn-success'>Voltar <IoMdArrowRoundBack /></Link>
                        </ButtonGroup>
                    </div>
                </Form>
            </Align>
        </>
    )
}

export default form