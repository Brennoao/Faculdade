import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import Pagina from '../components/Pagina'
import apiDeputados from '../services/apiDeputados'
import { Card, Col, Row, Table } from 'react-bootstrap'
const InfiniteScroll = dynamic(() => import('react-infinite-scroll-component'), { ssr: false });


const idDeputado = ({ Deputado, DespesasAno, Profissao }) => {

    console.log(Deputado)
    console.log(DespesasAno)
    console.log(Profissao)

    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 10;
    const totalPages = Math.ceil(DespesasAno.length / resultsPerPage);

    const [DespesasAnoPaginated, setDespesasAnoPaginated] = useState([]);

    const fetchMoreData = () => {
        setTimeout(() => {
            setDespesasAnoPaginated(DespesasAnoPaginated.concat(
                DespesasAno.slice(
                    (currentPage - 1) * resultsPerPage,
                    currentPage * resultsPerPage
                )
            ));
            setCurrentPage(currentPage + 1);
        }, 1000);
    };

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    }

    function formatacao(valor) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    }

    return (
        <Pagina titulo={Deputado.ultimoStatus.nome}>
            <Row>
                <Col md={3}>

                    {/* INFORMAÇÕES DO DEPUTADO */}
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
                <Col md={8}>
                    <InfiniteScroll
                        dataLength={DespesasAnoPaginated.length}
                        next={fetchMoreData}
                        hasMore={currentPage <= totalPages}
                        loader={<h4>Carregando...</h4>}
                    >
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th style={{ width: '8rem' }}>Data</th>
                                    <th>Fornecedor</th>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {DespesasAnoPaginated.map(item => (
                                    <tr key={item.numDocumento}>
                                        <td>{formatDate(item.dataDocumento)}</td>
                                        <td>{item.nomeFornecedor}</td>
                                        <td>{item.tipoDespesa}</td>
                                        <td>{formatacao(item.valorDocumento)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </InfiniteScroll>
                </Col>
                <Col md={1}>

                    {/* PROFISSOES DO DEPUTADO */}
                    <h3>Profissões</h3>
                    <ol>
                        {Profissao.map(item => (
                            <li key={item.codTipoProfissao}>{item.titulo}</li>
                        ))}
                    </ol>
                </Col>
            </Row>
        </Pagina>
    )
}
export default idDeputado

export async function getServerSideProps(context) {

    // ID DO DEPUTADOS(A)
    const id = context.params.id

    // REFERENCIA DEPUTADO ÚNICO
    const resultado = await apiDeputados.get('/deputados/' + id)
    const Deputado = resultado.data.dados

    // REFERENCIA DESPESAS
    const Despesas = await apiDeputados.get('/deputados/' + id + '/despesas?itens=9000&ordem=ASC&ordenarPor=ano')
    const DespesasAno = Despesas.data.dados

    // REFERENCIA PROFISSOES
    const Profissoes = await apiDeputados.get('/deputados/' + id + '/profissoes')
    const Profissao = Profissoes.data.dados

    // RETORNA VARIÁVEIS DECLARADAS
    return {
        props: { Deputado, DespesasAno, Profissao }, // will be passed to the page component as props
    }
}
