import React, { useEffect, useState } from 'react'
import Pagina from '@/components/Pagina'
import Looping from '@/components/Looping';
import { Button, Badge } from 'react-bootstrap';

const index = () => {
    const [contador, setContador] = useState()

    useEffect(() => {
        const intervalId = setInterval(() => {
            setContador(getAll().length);
        }, 500);                                                    // ATUALIZA O CONTADOR ( A CADA 1000ms É UM SEGUNDO)

        return () => {
            clearInterval(intervalId);                              // LIMPA O INTERVALO QUANDO O COMPONENTE É DESMONTADO
        };
    }, []);

    function getAll() {
        return JSON.parse(localStorage.getItem('cursos')) || []
    }


    return (
        <Pagina titulo='Cursos'>
            <Looping Cursos='cursos' colSpan='2' Nome='nome' Duracao='duracao' Modalidade='modalidade'>
                <Button variant="danger">
                    Cursos <Badge bg="secondary">{contador}</Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>
            </Looping>
        </Pagina>
    )
}

export default index
