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


const form = () => {

    const { register, handleSubmit } = useForm();
    const { push } = useRouter();

    function salvar(dados) {
        axios.post('/api/cursos', dados);
        push('/cursos');
    }

    return (
        <Pagina titulo="Formulário">
            <form>
                <Test controlId="nome" label="Nome" placeholder="Digite o nome" register={register('nome')} />

                <Test controlId="duracao" label="Duração" placeholder="Digite a duração" register={register('duracao')} />

                <Test controlId="modalidade" label="Modalidade" placeholder="Digite a modalidade" register={register('modalidade')} />

                <div className="text-center">
                    <ButtonGroup className="mb-2">
                        <Button variant="warning" onClick={handleSubmit(salvar)}> Salvar <BsCheck2Square /> </Button>
                        <Link href={'/cursos'} className="btn btn-success"> Voltar <IoMdArrowRoundBack /> </Link>
                    </ButtonGroup>
                </div>
            </form>
        </Pagina>

    )
}

export default form