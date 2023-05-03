import React from 'react'
import Link from 'next/link'
import Pagina from '../components/Pagina'
import apiDeputados from '../services/apiDeputados'
import { Card, Col, Row, Table } from 'react-bootstrap'

const idDeputado = ({ Deputado, DespesasAno, Profissao }) => {

    console.log(Deputado)
    console.log(DespesasAno)
    console.log(Profissao)

    function formatacao(valor) {
    
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    }

    return (
        <Pagina titulo={Deputado.ultimoStatus.nome}>
            <Row>
                <Col md={3}>
                    <Card className='mb-2'>
                        <Card.Img variant="top" src={Deputado.ultimoStatus.urlFoto} />
                        <Card.Body>
                            <Card.Title>{Deputado.ultimoStatus.nome}</Card.Title>
                            <Card.Text>partido: {Deputado.ultimoStatus.siglaPartido}</Card.Text>
                            <Card.Text>UF: {Deputado.ultimoStatus.siglaUf}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Link href='/' className='btn btn-danger'>Voltar</Link>
                </Col>
                <Col md={6}>
                    <Table striped className='border border-3 rounded-4'>
                        <thead>
                            <tr>
                                <th style={{width: '8rem'}}>Data</th>
                                <th>Descrição</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DespesasAno.map(item => (
                                <tr>
                                    <td>{item.dataDocumento}</td>
                                    <td>{item.tipoDespesa}</td> 
                                    <td>{formatacao (item.valorDocumento)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col md={3}>
                    <h3>Profissões</h3>
                    <ol>
                        {Profissao.map(item => (
                            <li>{item.titulo}</li>
                        ))}
                    </ol>
                </Col>
            </Row>
        </Pagina>
    )
}
// {formatacao(filme)}
export default idDeputado

export async function getServerSideProps(context) {
    const id = context.params.id

    // ID DO ATOR(A)

    const resultado = await apiDeputados.get('/deputados/' + id)
    const Deputado = resultado.data.dados

    const Despesas = await apiDeputados.get('/deputados/' + id + '/despesas?ordem=ASC&ordenarPor=ano')
    const DespesasAno = Despesas.data.dados

    const Profissoes = await apiDeputados.get('/deputados/' + id + '/profissoes')
    const Profissao = Profissoes.data.dados

    return {
        props: { Deputado, DespesasAno, Profissao }, // will be passed to the page component as props
    }
}
{/* <img src={Deputado.ultimoStatus.urlFoto}></img> */ }