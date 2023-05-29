
import React, { useEffect, useState } from 'react'
import { Badge, Button } from 'react-bootstrap';

const Counter = (props) => {

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
        return JSON.parse(localStorage.getItem(props.Variavel)) || []
    }

    return (
        <Button variant="danger">
            {props.Variavel} <Badge bg="secondary">{contador}</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    )
}

export default Counter