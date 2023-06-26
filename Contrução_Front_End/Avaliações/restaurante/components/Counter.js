
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Badge, Button } from 'react-bootstrap';

const Counter = (props) => {

    const [contador, setContador] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            getAll();
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function getAll() {
        axios.get(props.Variavel).then(resultado => {
            setContador(resultado.data.length);
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <Button variant="outline-dark">
            {props.Name} <Badge bg="secondary">{props.Variavel.length}</Badge>
            <span className="visually-hidden">unread messages</span>
        </Button>
    )
}

export default Counter