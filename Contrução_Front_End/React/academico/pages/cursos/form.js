import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Pagina from '@/components/Pagina';
import { useForm } from 'react-hook-form';
import Test from '../../components/Test';
import { ButtonGroup, Button, Form, FloatingLabel } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import { BsCheck2Square } from 'react-icons/Bs';
import cursoValidator from '@/validators/cursoValidator';


const form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { push } = useRouter();

    function salvar(dados) {
        axios.post('/api/cursos', dados);
        push('/cursos');
    }

    return (
        <Pagina titulo="Formulário">

            <Form>
                <FloatingLabel controlId={"nome"} label="Nome" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', cursoValidator.Nome)} />
                    {errors.nome && <small className='text-danger'>{errors.nome.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"duracao"} label="Duração" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.duracao} placeholder="Digite a duração" {...register('duracao', cursoValidator.Duracao)} />
                    {errors.duracao && <small className='text-danger'>{errors.duracao.message}</small>}
                </FloatingLabel>

                <FloatingLabel controlId={"modalidade"} label="Modalidade" className="mb-3">
                    <Form.Control type="text" isInvalid={errors.modalidade} placeholder="Digite a duração" {...register('modalidade', cursoValidator.Modalidade)} />
                    {errors.modalidade && <small className='text-danger'>{errors.modalidade.message}</small>}
                </FloatingLabel>

                <div className="text-center">
                    <ButtonGroup className="mb-2">
                        <Button variant="warning" onClick={handleSubmit(salvar)}> Salvar <BsCheck2Square /> </Button>
                        <Link href={'/cursos'} className="btn btn-success"> Voltar <IoMdArrowRoundBack /> </Link>
                    </ButtonGroup>
                </div>
            </Form>
        </Pagina >

    )
}

export default form