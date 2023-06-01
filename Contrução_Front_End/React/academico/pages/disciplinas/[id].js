import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheck2Square } from 'react-icons/Bs';
import { IoMdArrowRoundBack } from 'react-icons/Io';


const form = () => {

    const { register, handleSubmit, setValue } = useForm()
    const { push, query } = useRouter()

    useEffect(() => {
        if (query.id) {
            axios.get('/api/disciplinas/' + query.id).then(resultado => {
                const disciplina = resultado.data
                
                for(let atributo in disciplina){
                    setValue(atributo, disciplina[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/disciplinas/' + dados.id, dados)
        push('/disciplinas')                                                             // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
    }

    return (
        <Pagina titulo='Disciplina'>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="curso">
                    <Form.Label>Duração:</Form.Label>
                    <Form.Control type="text" {...register('curso')} disabled/>
                </Form.Group>

                <div className='text-center'>
                    <Button variant="warning" onClick={handleSubmit(salvar)} >Salvar <BsCheck2Square /></Button>
                    <Link href={'/disciplinas'} className='btn btn-success ms-2'>Voltar <IoMdArrowRoundBack /></Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form