import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap'
import { BsTrashFill } from 'react-icons/Bs';
import { AiFillEdit } from 'react-icons/Ai';

const Looping = (props) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        setData(getAll())
    }, []);                                                                     // ATUALIZA A FUNÇÃO DATA

    function getAll() {
        return JSON.parse(localStorage.getItem(props.Cursos)) || []
    }

    function deleteItem(id) {
        if (confirm('Deseja realmente deletar este item')) {                    // CONFIRM = FUNÇÃO DO JAVASCRIPT = DUAS OPÇÕES OK=TRUE CANCELAR=FALSE
            const cursos = getAll()                                             // PUXA A FUNÇÃO getAll
            cursos.splice(id, 1)                                                // SPLICE = FUNÇÃO DO JAVASCRIPT = OFERECE 3 PARÂMETROS (DESSE, DELETAR, ALTERAR) 
            console.log(cursos)
            window.localStorage.setItem(props.Cursos, JSON.stringify(cursos))
            setData(cursos)                                                     // ATUALIZA O USESTATE ATUALIZANDO A FUNÇÃO DESEJADA
        }
    }

    function capitalizeWords(str) {
        const wordsToIgnore = ['de', 'do', 'da', 'em'];
        let words = str.split(' ');
      
        for (let i = 0; i < words.length; i++) {
          const word = words[i];
          if (i !== 0 && wordsToIgnore.includes(word.toLowerCase())) {
            words[i] = word.toLowerCase();
          } else {
            words[i] = capitalizeFirstLetter(word);
          }
        }
      
        return words.join(' ');
      }
      
      function capitalizeFirstLetter(word) {
        let capitalizedWord = "";
        let parts = word.split("-");
        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];
          capitalizedWord += part.charAt(0).toUpperCase() + part.slice(1);
          if (i !== parts.length - 1) {
            capitalizedWord += "-";
          }
        }
        return capitalizedWord;
      }


    return (
        <>
            <Link href={'/cursos/form'} className='btn btn-danger mb-3'>Novo</Link>
            <Table bordered hover variant="danger">
                <thead className='text-center'>
                    <tr>
                        {props.colSpan ?
                            <th colSpan={props.colSpan}>#</th> :
                            <>
                                <th>{'Editar'.toUpperCase()}</th>
                                <th>{'Deletar'.toUpperCase()}</th>
                            </>
                        }
                        <th>{props.Nome.toUpperCase()}</th>
                        <th>{props.Duracao.toUpperCase()}</th>
                        <th>{props.Modalidade.toUpperCase()}</th>
                    </tr>
                </thead>
                <tbody>
                    {data === null ? '' :
                        data.map((item, i) => (
                            <tr key={i}>
                                <td style={{ width: '2rem' }}><Link href={'/cursos/' + i} className='btn btn-danger'><AiFillEdit /></Link></td>
                                <td style={{ width: '2rem' }}><Button variant='danger' onClick={() => deleteItem(i)}><BsTrashFill /></Button></td>
                                <td style={{ width: '33.33%' }}>{capitalizeWords(item[props.Nome])}</td>
                                <td style={{ width: '33.33%' }}>{capitalizeWords(item[props.Duracao])}</td>
                                <td style={{ width: '33.33%' }}>{capitalizeWords(item[props.Modalidade])}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Looping