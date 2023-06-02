import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form, FloatingLabel, ButtonGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheck2Square } from 'react-icons/Bs';
import { IoMdArrowRoundBack } from 'react-icons/Io';
import axios from 'axios'
import Test from '../../components/Test';



const form = () => {

    const { push } = useRouter()                                                                // IMPORT DA FUNÇÃO PUSH PARA A UTILIZAÇÃO
    const { register, handleSubmit } = useForm()

    const [cursos, setCursos] = useState([])

    useEffect(() => { getAll() }, [])

    function salvar(dados) {
        axios.post('/api/disciplinas', dados)
        push('/disciplinas')
    }

    function getAll() {
        axios.get('/api/cursos').then(resultado => {
            setCursos(resultado.data);
            // console.log(resultado.data)
        })
    }
    
    return (
        <Pagina titulo='Formulário'>
            <Form>
                <Test controlId="nome" label="Nome" placeholder="Digite o nome" register={register('nome')} />

                <Form.Select aria-label="Default select example" {...register('curso')} className='mb-3'>
                    <option>Selecione o Curso</option>
                    {cursos.map((item, i) => (
                        <option key={i} value={item.nome}>{item.nome}</option>
                    ))}
                </Form.Select>

                <div className='text-center'>
                    <ButtonGroup className="mb-2">
                        <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                        <Link href={'/disciplinas'} className='btn btn-success'>Voltar <IoMdArrowRoundBack /></Link>
                    </ButtonGroup>
                </div>
            </Form>
        </Pagina>
    )
}

export default form