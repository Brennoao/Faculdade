import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form, FloatingLabel, ButtonGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheck2Square } from 'react-icons/Bs';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import axios from 'axios'
import Test from '../../components/Test';


const form = () => {

    const { register, handleSubmit } = useForm()
    const { push } = useRouter()                                                                // IMPORT DA FUNÇÃO PUSH PARA A UTILIZAÇÃO

    function salvar(dados) {                                                                       // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        axios.post('/api/professores', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        push('/professores')
    }

    return (
        <Pagina titulo='Formulário'>
            <Form>
                <Test controlId="nome" label="Nome" placeholder="Digite o nome" register={register('nome')} />
                
                <Test controlId="cpf" label="CPF" placeholder="Digite o cpf" register={register('cpf')} />
                
                <Test controlId="matricula" label="Matricula" placeholder="Digite o matricula" register={register('matricula')} />
                
                <Test controlId="salario" label="Salario" placeholder="Digite o salario" register={register('salario')} />
                
                <Test controlId="email" label="Email" placeholder="Digite o email" register={register('email')} />
                
                <Test controlId="telefone" label="Telefone" placeholder="Digite o telefone" register={register('telefone')} />
                
                <Test controlId="cep" label="cep" placeholder="Digite o cep" register={register('cep')} />
                
                <Test controlId="logradouro" label="Logradouro" placeholder="Digite o logradouro" register={register('logradouro')} />
                
                <Test controlId="complemento" label="Complemento" placeholder="Digite o complemento" register={register('complemento')} />
                
                <Test controlId="numero" label="Número" placeholder="Digite o numero" register={register('numero')} />
                
                <Test controlId="bairro" label="Bairro" placeholder="Digite o bairro" register={register('bairro')} />
                
                <div className='text-center'>
                    <ButtonGroup className="mb-2">
                        <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                        <Link href={'/professores'} className='btn btn-success'>Voltar <IoMdArrowRoundBack /></Link>
                    </ButtonGroup>
                </div>
            </Form>
        </Pagina>
    )
}

export default form