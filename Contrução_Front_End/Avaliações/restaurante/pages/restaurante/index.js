import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, FloatingLabel, Form, Tab, Table, Tabs } from 'react-bootstrap'
import Link from 'next/link'
import apiRestaurante from '../../services/apiRestaurante'
import { CnpjFormat, Inscricaoestadual } from '../../components/CnpjFormat'
import Counter from '../../components/Counter'
import { AiFillEdit } from 'react-icons/Ai'
import { BsTrashFill, BsCheck2Square } from 'react-icons/Bs'
import { IoMdArrowRoundBack } from 'react-icons/Io'
import axios from 'axios'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Align from '../../components/Align'
import { CapitalizeWords } from '../../components/CapitalizeWords'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'
import restauranteValidator from '../../validators/restauranteValidator'
import { mask, unmask } from 'remask'
import fornecedoresValidator from '../../validators/fornecedoresValidator'

const index = ({ pullInfosRestaurante }) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const { push } = useRouter();

    const [restaurantes, setRestaurantes] = useState([])

    useEffect(() => {
        axios.get('/api/restaurante').then(resultado => {
            setRestaurantes(resultado.data);
            // console.log(resultado.data)
        })
    }, [])

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const Mascara = event.target.getAttribute('mask')

        setValue(name, mask(value, Mascara))
    }

    function Save(dados) {
        dados.cnpj = unmask(dados.cnpj); dados.inscricaoEstadual = unmask(dados.inscricaoEstadual)
        axios.post('/api/restaurante', dados)                                                   // FUNÇÃO DO NEXT/ROUTER => TE LEVA PARA A PÁGINA DEFINIDA
        setIsVisible(!isVisible);
        push('/restaurante')
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
        setIsVisible(!isVisible);
        setChange(false);
    };

    const handleClickFornecedor = () => {
        setIsVisible(!isVisible);
        setChange(true);
    };

    console.log(pullInfosRestaurante)
    return (
        <>
            <Header Title='Restaurante' />

            <Tabs defaultActiveKey="Restaurante" transition={false} id="noanim-tab-example" justify className="mb-4" >
                <Tab eventKey="Restaurante" title="Restaurante">
                    <Align>
                        <div className='d-flex justify-content-between mb-3'>
                            <Link href='/restaurante/form' className='btn btn-outline-dark'>Novo</Link>
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
                                        <td><Button onClick={handleClickFuncionario} variant='outline-light'>Func.</Button></td>
                                        <td><Button onClick={handleClickFornecedor} variant='outline-light'>Forne.</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Align>
                </Tab>
                <Tab eventKey="profile" title="Funcionarios">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="contact" title="Fornecedores" disabled>
                    Tab content for Contact
                </Tab>
            </Tabs>

            <Align>
                {isVisible && change == true ? (
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
                                <Button variant="warning" onClick={handleSubmit(Save)} >Salvar <BsCheck2Square /></Button>
                            </div>
                        </Form>
                    </div>
                ) : isVisible && change == false ? (
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
                                <Button variant="warning" onClick={handleSubmit(Save)} >Salvar <BsCheck2Square /></Button>
                            </div>
                        </Form>
                    </div>
                ) : ''}

            </Align>

        </>
    )
}

export default index

export async function getServerSideProps(context) {

    const restaurante = await apiRestaurante.get('/Restaurante')
    const pullInfosRestaurante = restaurante.data

    return {
        props: { pullInfosRestaurante }, // will be passed to the page component as props
    }
}