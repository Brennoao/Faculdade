import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Pagina from '@/components/Pagina';
import { useForm } from 'react-hook-form';
import Test from '../../components/Test';
import { ButtonGroup, Button } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import { BsCheck2Square } from 'react-icons/Bs';
import { Form } from 'react-bootstrap';
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
                {errors.nome && <small className='text-danger'>{errors.nome.message}</small>}
                <Test controlId="nome" isInvalid={errors.nome} label="Nome" placeholder="Digite o nome" register={register('nome', cursoValidator.Nome)} />

                {errors.duracao && <small className='text-danger'>{errors.duracao.message}</small>}
                <Test controlId="duracao" isInvalid={errors.nome} label="Duração" placeholder="Digite a duração" register={register('duracao', cursoValidator.Duracao)} />

                {errors.modalidade && <small className='text-danger'>{errors.modalidade.message}</small>}
                <Test controlId="modalidade" isInvalid={errors.nome} label="Modalidade" placeholder="Digite a modalidade" register={register('modalidade', cursoValidator.Modalidade)} />

                <div className="text-center">
                    <ButtonGroup className="mb-2">
                        <Button variant="warning" onClick={handleSubmit(salvar)}> Salvar <BsCheck2Square /> </Button>
                        <Link href={'/cursos'} className="btn btn-success"> Voltar <IoMdArrowRoundBack /> </Link>
                    </ButtonGroup>
                </div>
            </Form>
        </Pagina>

    )
}

export default form