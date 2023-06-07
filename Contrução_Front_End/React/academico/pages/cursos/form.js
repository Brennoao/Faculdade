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


const form = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { push } = useRouter();

    function salvar(dados) {
        axios.post('/api/cursos', dados);
        push('/cursos');
    }

    const ValidatorNome = {
        required: 'O nome é obrigatório',
        minLength: { value: 3, message: 'A quantidade minima é de 3 caracteres' },
        maxLength: { value: 10, message: 'A quantidade minima é de 10 caracteres' }
    }

    const ValidatorDuracao = {
        required: 'O duração é obrigatório',
        minLength: { value: 5, message: 'A quantidade minima é de 3 caracteres' },
        maxLength: { value: 2, message: 'A quantidade minima é de 10 caracteres' },
        min: { value: 5, message: 'O valor mínimo é de 5' },
        max: { value: 12, message: 'O valor máximo é de 12' }
    }

    const ValidatorModalidade = {
        required: 'O modalidade é obrigatório',
        minLength: { value: 5, message: 'A quantidade minima é de 3 caracteres' },
        maxLength: { value: 10, message: 'A quantidade minima é de 10 caracteres' }
    }

    return (
        <Pagina titulo="Formulário">

            <Form>
                {errors.nome && <small className='text-danger'>{errors.nome.message}</small>}
                <Test controlId="nome" label="Nome" placeholder="Digite o nome" register={register('nome', ValidatorNome)} />

                {errors.duracao && <small className='text-danger'>{errors.duracao.message}</small>}
                <Test controlId="duracao" label="Duração" placeholder="Digite a duração" register={register('duracao', ValidatorDuracao)} />

                {errors.modalidade && <small className='text-danger'>{errors.modalidade.message}</small>}
                <Test controlId="modalidade" label="Modalidade" placeholder="Digite a modalidade" register={register('modalidade', ValidatorModalidade)} />

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