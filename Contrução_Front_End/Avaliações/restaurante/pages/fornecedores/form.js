import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Form, FloatingLabel } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Align from '../../components/Align'
import { useRouter } from 'next/router';
import { BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'
import fornecedoresValidator from '../../validators/fornecedoresValidator'
import { mask, unmask } from 'remask'

const form = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const { push } = useRouter();

    const [restaurantes, setRestaurantes] = useState([])

    useEffect(() => {
        axios.get('/api/restaurante').then(resultado => {
            setRestaurantes(resultado.data);
            // console.log(resultado.data)
        })
    }, [])

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const Mascara = event.target.getAttribute('mask')

        setValue(name, mask(value, Mascara))
    }

    function Save(dados) {
        dados.cnpj = unmask(dados.cnpj); dados.celular = unmask(dados.celular); dados.telefone = unmask(dados.telefone)
        axios.post('/api/fornecedores', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        console.log(dados)
        push('/fornecedores')
    }

    return (
        <>
            <Align>
                <Form>
                    <FloatingLabel controlId={"razaoSocial"} label="Razao Social" className="mb-3">
                        <Form.Control type="text" isInvalid={errors.razaoSocial} placeholder="Digite o razaoSocial" {...register('razao_social', fornecedoresValidator.razaoSocial)} />
                        {errors.razaoSocial && <small className='text-danger'>{errors.razaoSocial.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"cnpj"} label="Cnpj" className="mb-3">
                    <Form.Control type="text" mask='99.999.999/9999-99' isInvalid={errors.cnpj} placeholder="Digite o cnpj" {...register('cnpj', fornecedoresValidator.Cnpj)} onChange={handleChange} />
                        {errors.cnpj && <small className='text-danger'>{errors.cnpj.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"celular"} label="Celular" className="mb-3">
                        <Form.Control type="tell" mask='(99) 99999-9999' isInvalid={errors.celular} placeholder="Digite o celular" {...register('celular', fornecedoresValidator.Celular)} onChange={handleChange}/>
                        {errors.celular && <small className='text-danger'>{errors.celular.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"telefone"} label="Telefone" className="mb-3">
                        <Form.Control type="tell" mask='(99) 9999-9999' isInvalid={errors.telefone} placeholder="Digite o telefone" {...register('telefone', fornecedoresValidator.Telefone)} onChange={handleChange}/>
                        {errors.telefone && <small className='text-danger'>{errors.telefone.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"cep"} label="Cep" className="mb-3">
                        <Form.Control type="number" isInvalid={errors.cep} placeholder="Digite o cep" {...register('cep', fornecedoresValidator.Cep)} />
                        {errors.cep && <small className='text-danger'>{errors.cep.message}</small>}
                    </FloatingLabel>

                    <FloatingLabel controlId={"endereco"} label="Endereço" className="mb-3">
                        <Form.Control type="text" isInvalid={errors.endereco} placeholder="Digite o endereco" {...register('endereco', fornecedoresValidator.Endereco)} />
                        {errors.endereco && <small className='text-danger'>{errors.endereco.message}</small>}
                    </FloatingLabel>

                    <Form.Select aria-label="Default select example" {...register('restaurante_id')} className='mb-3'>
                        <option>Selecione o Restaurante</option>
                        {restaurantes.map((item, i) => (
                            <option key={i} value={item.id}>{item.razao_social}</option>
                        ))}
                    </Form.Select>

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