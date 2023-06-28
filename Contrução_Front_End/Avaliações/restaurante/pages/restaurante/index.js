import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiRestaurante from '../../services/apiRestaurante'
import { Button, ButtonGroup, FloatingLabel, Form, Modal, Tab, Table, Tabs } from 'react-bootstrap'
import Link from 'next/link'
import { AiFillEdit } from 'react-icons/Ai'
import { BsTrashFill, BsCheck2Square } from 'react-icons/Bs'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'
import { mask, unmask } from 'remask'
import Align from '../../components/Align'
import Header from '../../components/Header'
import Counter from '../../components/Counter'
import { CapitalizeWords } from '../../components/CapitalizeWords'
import restauranteValidator from '../../validators/restauranteValidator'
import fornecedoresValidator from '../../validators/fornecedoresValidator'
import funcionariosValidator from '../../validators/funcionariosValidator'
import { CnpjFormat, CpfFormat, Inscricaoestadual, RegistroGeral } from '../../components/CnpjFormat'
import Cargos from '../../components/Cargos'
import { Celular } from '../../components/Call'

const index = ({ pullInfosRestaurante, pullFuncionarios, pullFornecedores }) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const { push } = useRouter();

    const [show, setShow] = useState(false);
    const [showFuncionario, setShowFuncionario] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseFuncionario = () => setShowFuncionario(false);
    const handleShowFuncionario = () => setShowFuncionario(true);

    const [restaurantes, setRestaurantes] = useState([])

    useEffect(() => {
        axios.get('/api/restaurante').then(resultado => {
            setRestaurantes(resultado.data);
            // console.log(resultado.data)
        })
    }, [])

    const formatPassword = (senha) => {
        return '*'.repeat(senha.length);
    };

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const Mascara = event.target.getAttribute('mask')

        setValue(name, mask(value, Mascara))
    }

    function SaveRestaurante(dados) {
        dados.cnpj = unmask(dados.cnpj); dados.inscricaoEstadual = unmask(dados.inscricaoEstadual)
        axios.post('/api/restaurante', dados)
        handleClose()
        // setIsVisible(!isVisible);

        setValue('cnpj', ''); setValue('inscricaoEstadual', ''); setValue('razaoSocial', '')
        push('/restaurante')
    }

    function SaveFuncionario(dados) {
        dados.cpf = unmask(dados.cpf); dados.registroGeral = unmask(dados.registroGeral)
        axios.post('/api/funcionarios', dados)
        setIsVisible(!isVisible);
    }

    function UpdateFuncionario(dados) {
        dados.cpf = unmask(dados.cpf); dados.registroGeral = unmask(dados.registroGeral)
        axios.put('/api/funcionarios', dados)
        setIsVisible(!isVisible);
    }

    function SaveFornecedor(dados) {
        dados.cnpj = unmask(dados.cnpj); dados.celular = unmask(dados.celular); dados.telefone = unmask(dados.telefone)
        axios.post('/api/fornecedores', dados)
        setChange(!change);
    }

    function deletar(id) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: { confirmButton: 'btn btn-success', cancelButton: 'btn btn-danger' },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({ title: 'Tem certeza?', text: "Ação sem volta!", icon: 'warning', showCancelButton: true, confirmButtonText: 'Deletar', cancelButtonText: 'Cancelar' }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire('Removido!', 'Seu arquivo foi excluído.', 'success')
                axios.delete('/api/restaurante/' + id)
                push('/restaurante')
            }
            else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire('Ação cancelada', 'Seu arquivo está seguro', 'error')
            }
        })
    }

    const [isVisible, setIsVisible] = useState(false);
    const [change, setChange] = useState(false);

    const handleClickFuncionario = () => {
        if (change === true) {
            setChange(!change)
        }
        setIsVisible(!isVisible);
    };

    const handleClickFornecedor = () => {
        if (isVisible === true) {
            setIsVisible(!isVisible)
        }
        setChange(!change);
    };

    console.log(pullInfosRestaurante)
    return (
        <>
            <Header Title='Restaurante' />

            <Tabs defaultActiveKey="Restaurante" transition={false} id="noanim-tab-example" justify className="mb-4" >
                <Tab eventKey="Restaurante" title="Restaurante">
                    <Align>
                        <div className='d-flex justify-content-between mb-3'>
                            <Button variant="outline-dark" onClick={handleShow}>Novo</Button>
                            <Counter Variavel={pullInfosRestaurante} Name='Contador' />
                        </div>
                        <Table striped bordered variant="dark">
                            <thead>
                                <tr>
                                    <th colSpan={2}>#</th>
                                    <th>Razao Social</th>
                                    <th>CNPJ</th>
                                    <th>Inscrição Estadual</th>
                                    <th>Fornecedores</th>
                                    <th>Funcionários</th>
                                    <th colSpan={2}>Adicionar mais um</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pullInfosRestaurante.map(item => (
                                    <tr key={item.id}>
                                        <td style={{ width: '2rem' }}><Link href={'/restaurante/' + item.id} className='btn btn-outline-light'><AiFillEdit /></Link></td>
                                        <td style={{ width: '2rem' }}><Button variant='outline-light' onClick={() => deletar(item.id)}><BsTrashFill /></Button></td>
                                        <td>{CapitalizeWords(item.razao_social)}</td>
                                        <td>{CnpjFormat(item.cnpj)}</td>
                                        <td>{Inscricaoestadual(item.inscricao_estadual)}</td>
                                        <td>{item.fornecedore.length}</td>
                                        <td>{item.funcionario.length}</td>
                                        <td><Button onClick={handleClickFuncionario} variant='outline-light'>Funcionarios</Button></td>
                                        <td><Button onClick={handleClickFornecedor} variant='outline-light'>Fornecedores</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Align>
                </Tab>

                <Tab eventKey="Funcionarios" title="Funcionarios">
                    <Align>
                        <div className='d-flex justify-content-between mb-3'>
                            <Button variant="outline-dark" onClick={() => handleShowFuncionario(true)}>Novo</Button>
                            <Counter Variavel={pullFuncionarios} Name='Contador' />
                        </div>
                        <Table striped bordered variant="dark">
                            <thead>
                                <tr>
                                    <th colSpan={2}>#</th>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Registro Geral</th>
                                    <th>Email</th>
                                    <th>Cargo</th>
                                    <th>Senha</th>
                                    <th>Restaurantes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pullFuncionarios.map(item => (
                                    <tr key={item.id}>
                                        <td style={{ width: '2rem' }}><Link href={'/funcionarios/' + item.id} className='btn btn-outline-light'><AiFillEdit /></Link></td>
                                        <td style={{ width: '2rem' }}><Button variant='outline-light' onClick={() => deletar(item.id)}><BsTrashFill /></Button></td>
                                        <td>{CapitalizeWords(item.nome)}</td>
                                        <td>{CpfFormat(item.cpf)}</td>
                                        <td>{RegistroGeral(item.registro_geral)}</td>
                                        <td>{item.email}</td>
                                        <td>{CapitalizeWords(item.cargo)}</td>
                                        <td>{formatPassword(item.senha)}</td>
                                        <td>{CapitalizeWords(item.restaurante.razao_social)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Align>
                </Tab>

                <Tab eventKey="Fornecedores" title="Fornecedores">
                    <Align>
                        <div className='d-flex justify-content-between mb-3'>
                            <Link href='/fornecedores/form' className='btn btn-outline-dark'>Novo</Link>
                            <Counter Variavel={pullInfosRestaurante} Name='Contador' />
                        </div>
                        <Table striped bordered variant="dark">
                            <thead>
                                <tr>
                                    <th colSpan={2}>#</th>
                                    <th>Razao Social</th>
                                    <th>CNPJ</th>
                                    <th>Celular</th>
                                    <th>Cep</th>
                                    <th>Endereco</th>
                                    <th>Produtos</th>
                                    <th>Restaurantes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pullFornecedores.map(item => (
                                    <tr key={item.id}>
                                        <td style={{ width: '2rem' }}><Link href={'/fornecedores/' + item.id} className='btn btn-outline-light'><AiFillEdit /></Link></td>
                                        <td style={{ width: '2rem' }}><Button variant='outline-light' onClick={() => deletar(item.id)}><BsTrashFill /></Button></td>
                                        <td>{CapitalizeWords(item.razao_social)}</td>
                                        <td>{CnpjFormat(item.cnpj)}</td>
                                        <td>{Celular(item.celular)}</td>
                                        <td>{item.cep}</td>
                                        <td>{item.endereco}</td>
                                        <td>{item.produto.length}</td>
                                        <td>{CapitalizeWords(item.restaurante.razao_social)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Align>
                </Tab>
            </Tabs>

            <Align>
                {isVisible && (
                    <div className='fade-in'>
                        <Form>
                            <FloatingLabel controlId={"nome"} label="Nome" className="mb-3">
                                <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', funcionariosValidator.nome)} />
                                {errors.nome && <small className='text-danger'>{errors.nome.message}</small>}
                            </FloatingLabel>

                            <FloatingLabel controlId={"cpf"} label="CPF" className="mb-3">
                                <Form.Control type="text" mask='999.999.999-99' isInvalid={errors.cpf} placeholder="Digite o cpf" {...register('cpf', funcionariosValidator.cpf)} onChange={handleChange} />
                                {errors.cpf && <small className='text-danger'>{errors.cpf.message}</small>}
                            </FloatingLabel>

                            <FloatingLabel controlId={"registroGeral"} label="Registro Geral" className="mb-3">
                                <Form.Control type="text" mask='999.999-9' isInvalid={errors.registroGeral} placeholder="Digite o registroGeral" {...register('registro_geral', funcionariosValidator.registroGeral)} onChange={handleChange} />
                                {errors.registroGeral && <small className='text-danger'>{errors.registroGeral.message}</small>}
                            </FloatingLabel>

                            <FloatingLabel controlId={"email"} label="Email" className="mb-3">
                                <Form.Control type="email" isInvalid={errors.email} placeholder="Digite o email" {...register('email', funcionariosValidator.email)} />
                                {errors.email && <small className='text-danger'>{errors.email.message}</small>}
                            </FloatingLabel>

                            <Form.Select aria-label="Default select example" {...register('cargo')} className='mb-3'>
                                <option>Selecione o Cargo</option>
                                {Cargos.map((item, i) => (
                                    <option key={i} value={item.nome}>{item.nome}</option>
                                ))}
                            </Form.Select>

                            <FloatingLabel controlId={"senha"} label="Senha" className="mb-3">
                                <Form.Control type="password" isInvalid={errors.senha} placeholder="Digite o senha" {...register('senha', funcionariosValidator.senha)} />
                                {errors.senha && <small className='text-danger'>{errors.senha.message}</small>}
                            </FloatingLabel>

                            <Form.Select aria-label="Default select example" {...register('restaurante_id')} className='mb-3'>
                                <option>Selecione o Restaurante</option>
                                {restaurantes.map(item => (
                                    <option key={item.id} value={item.id}>{item.razao_social}</option>
                                ))}
                            </Form.Select>

                            <div className='text-center'>
                                <Button variant="warning" onClick={handleSubmit(UpdateFuncionario)} >Salvar <BsCheck2Square /></Button>
                            </div>
                        </Form>
                    </div>
                )}

                {change && (
                    <div className='fade-in'>
                        <Form>
                            <FloatingLabel controlId={"razaoSocial"} label="Razao Social" className="mb-3">
                                <Form.Control type="text" isInvalid={errors.razaoSocial} placeholder="Digite o razaoSocial" {...register('razao_social', fornecedoresValidator.razaoSocial)} />
                                {errors.razaoSocial && <small className='text-danger'>{errors.razaoSocial.message}</small>}
                            </FloatingLabel>

                            <FloatingLabel controlId={"cnpj"} label="Cnpj" className="mb-3">
                                <Form.Control type="text" mask='99.999.999/9999-99' isInvalid={errors.cnpj} placeholder="Digite o cnpj" {...register('cnpj', fornecedoresValidator.Cnpj)} onChange={handleChange} />
                                {errors.cnpj && <small className='text-danger'>{errors.cnpj.message}</small>}
                            </FloatingLabel>

                            <FloatingLabel controlId={"celular"} label="Celular" className="mb-3">
                                <Form.Control type="tell" mask='(99) 99999-9999' isInvalid={errors.celular} placeholder="Digite o celular" {...register('celular', fornecedoresValidator.Celular)} onChange={handleChange} />
                                {errors.celular && <small className='text-danger'>{errors.celular.message}</small>}
                            </FloatingLabel>

                            <FloatingLabel controlId={"telefone"} label="Telefone" className="mb-3">
                                <Form.Control type="tell" mask='(99) 9999-9999' isInvalid={errors.telefone} placeholder="Digite o telefone" {...register('telefone', fornecedoresValidator.Telefone)} onChange={handleChange} />
                                {errors.telefone && <small className='text-danger'>{errors.telefone.message}</small>}
                            </FloatingLabel>

                            <FloatingLabel controlId={"cep"} label="Cep" className="mb-3">
                                <Form.Control type="number" isInvalid={errors.cep} placeholder="Digite o cep" {...register('cep', fornecedoresValidator.Cep)} />
                                {errors.cep && <small className='text-danger'>{errors.cep.message}</small>}
                            </FloatingLabel>

                            <FloatingLabel controlId={"endereco"} label="Endereço" className="mb-3">
                                <Form.Control type="text" isInvalid={errors.endereco} placeholder="Digite o endereco" {...register('endereco', fornecedoresValidator.Endereco)} />
                                {errors.endereco && <small className='text-danger'>{errors.endereco.message}</small>}
                            </FloatingLabel>

                            <Form.Select aria-label="Default select example" {...register('restaurante_id')} className='mb-3'>
                                <option>Selecione o Restaurante</option>
                                {restaurantes.map((item, i) => (
                                    <option key={i} value={item.id}>{item.razao_social}</option>
                                ))}
                            </Form.Select>

                            <div className='text-center'>
                                <Button variant="warning" onClick={handleSubmit(SaveFornecedor)} >Salvar <BsCheck2Square /></Button>
                            </div>
                        </Form>
                    </div>
                )}

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nova Filial</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FloatingLabel controlId={"cnpj"} label="CNPJ" className="mb-3">
                                <Form.Control type="text" mask='99.999.999/9999-99' isInvalid={errors.cnpj} placeholder="Digite o cnpj" {...register('cnpj', restauranteValidator.Cnpj)} onChange={handleChange} />
                                {errors.cnpj && <small className='text-danger'>{errors.cnpj.message}</small>}
                            </FloatingLabel>

                            <FloatingLabel controlId={"inscricaoEstadual"} label="Inscricao Estadual" className="mb-3">
                                <Form.Control type="text" mask='9999999999-99' isInvalid={errors.inscricaoEstadual} placeholder="Digite o inscricaoEstadual" {...register('inscricaoEstadual', restauranteValidator.InscricaoEstadual)} onChange={handleChange} />
                                {errors.inscricaoEstadual && <small className='text-danger'>{errors.inscricaoEstadual.message}</small>}
                            </FloatingLabel>

                            <FloatingLabel controlId={"razaoSocial"} label="RazaoSocial" className="mb-3">
                                <Form.Control type="text" isInvalid={errors.razaoSocial} placeholder="Digite o razaoSocial" {...register('razaoSocial', restauranteValidator.RazaoSocial)} />
                                {errors.razaoSocial && <small className='text-danger'>{errors.razaoSocial.message}</small>}
                            </FloatingLabel>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="warning" onClick={handleSubmit(SaveRestaurante)} >Salvar <BsCheck2Square /></Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showFuncionario} onHide={handleCloseFuncionario} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nova Filial</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FloatingLabel controlId={"nome"} label="Nome" className="mb-3">
                                <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', funcionariosValidator.nome)} />
                                {errors.nome && <small className='text-danger'>{errors.nome.message}</small>}
                            </FloatingLabel>

                            <FloatingLabel controlId={"cpf"} label="CPF" className="mb-3">
                                <Form.Control type="text" mask='999.999.999-99' isInvalid={errors.cpf} placeholder="Digite o cpf" {...register('cpf', funcionariosValidator.cpf)} onChange={handleChange} />
                                {errors.cpf && <small className='text-danger'>{errors.cpf.message}</small>}
                            </FloatingLabel>

                            <FloatingLabel controlId={"registroGeral"} label="Registro Geral" className="mb-3">
                                <Form.Control type="text" mask='999.999-9' isInvalid={errors.registroGeral} placeholder="Digite o registroGeral" {...register('registroGeral', funcionariosValidator.registroGeral)} onChange={handleChange} />
                                {errors.registroGeral && <small className='text-danger'>{errors.registroGeral.message}</small>}
                            </FloatingLabel>

                            <FloatingLabel controlId={"email"} label="Email" className="mb-3">
                                <Form.Control type="email" isInvalid={errors.email} placeholder="Digite o email" {...register('email', funcionariosValidator.email)} />
                                {errors.email && <small className='text-danger'>{errors.email.message}</small>}
                            </FloatingLabel>

                            <Form.Select aria-label="Default select example" {...register('cargo')} className='mb-3'>
                                <option>Selecione o Cargo</option>
                                {Cargos.map((item, i) => (
                                    <option key={i} value={item.nome}>{item.nome}</option>
                                ))}
                            </Form.Select>

                            <FloatingLabel controlId={"senha"} label="Senha" className="mb-3">
                                <Form.Control type="password" isInvalid={errors.senha} placeholder="Digite o senha" {...register('senha', funcionariosValidator.senha)} />
                                {errors.senha && <small className='text-danger'>{errors.senha.message}</small>}
                            </FloatingLabel>

                            <Form.Select aria-label="Default select example" {...register('restauranteId')} className='mb-3'>
                                <option>Selecione o Restaurante</option>
                                {restaurantes.map((item, i) => (
                                    <option key={i} value={item.id}>{item.razao_social}</option>
                                ))}
                            </Form.Select>

                            <div className='text-center'>
                                <Button variant="warning" onClick={handleSubmit(SaveFuncionario)} >Salvar <BsCheck2Square /></Button>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="warning" onClick={handleSubmit(SaveFuncionario)} >Salvar <BsCheck2Square /></Button>
                    </Modal.Footer>
                </Modal>
            </Align>

        </>
    )
}

export default index

export async function getServerSideProps(context) {

    const restaurante = await apiRestaurante.get('/Restaurante')
    const pullInfosRestaurante = restaurante.data

    const Funcionarios = await apiRestaurante.get('/Funcionarios')
    const pullFuncionarios = Funcionarios.data

    const fornecedores = await apiRestaurante.get('/Fornecedores')
    const pullFornecedores = fornecedores.data

    return {
        props: { pullInfosRestaurante, pullFuncionarios, pullFornecedores }, // will be passed to the page component as props
    }
}