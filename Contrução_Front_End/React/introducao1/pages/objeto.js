import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Pagina from '../components/Pagina'

const Objeto = () => {
    const Carro = [
        { marca: 'Honda', modelo: 'civic', ano: 2015, cor: 'branco', descricao: "variedade de configurações, alta economia de combustível e facilidade de propriedade o mantêm entre os melhores sedãs compactos e cupês", foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Ffi5hu8qFf4M%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=441c639f6f2128bf07e10c10e12c9261b76891ab4bcc644627d73faa5c4c772c&ipo=images' },
        { marca: 'Hyundai', modelo: 'tucson', ano: 2012, cor: 'preto', descricao: "uma bela cabine, ampla lista de recursos, dirigibilidade esportiva e preço baixo. É a melhor escolha para um pequeno crossover.", foto: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.revendapro.com.br%2F15891443aac9a317482d86a599f53e09_big.JPG&f=1&nofb=1&ipt=35c495eb6d8c06b227763539c7d4ca639476fd5892cfacd9bd435b9f688d4937&ipo=images' },
        { marca: 'Chevrolet', modelo: 'celta', ano: 2002, cor: 'vermelho', descricao: "é um carro popular categoria 1 litro da Chevrolet que foi produzido no Brasil. Concorrente direto de outros carros populares como o Uno da Fiat, do Gol da Volkswagen e do Ka da Ford. O Celta é um hatchback e no final de 2006 e início de 2007 foi lançada a versão sedan do carro, chamada Prisma. Foi concebido e desenvolvido integralmente no Brasil.", foto: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.revendapro.com.br%2Fb3da302e09affc39526142a0da609c00_thumb.jpg&f=1&nofb=1&ipt=bf1a6cba03503f7c10b9bbb520c170fb8dc82caf670663e9f5f30017e6d6a74c&ipo=images' },
        { marca: 'fiat', modelo: 'Tempra', ano: 2000, cor: 'vinho', descricao: "Hoje o lançamento do Tempra está chegando perto dos seus 30 anos, e muitos de nós ainda se lembram dele como o modelo que deu o início da Fiat no segmento dos sedans médios no Brasil.", foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-NQf532jKO3Y%2FVUe3fs02ykI%2FAAAAAAAAESU%2FUiSPzgBKnnI%2Fs1600%2FTempra%252BOuro%252B4p.jpg&f=1&nofb=1&ipt=ed0d6edb0f8cd24070b96bd9d612bddbb8f4ac117fd9f90fc80a4eb0fcfc54f8&ipo=images' },
        { marca: 'fiat', modelo: 'Marea', ano: 2001, cor: 'prata', descricao: "O Marea (FIAT Type 185) é um automóvel que foi produzido e comercializado em nível mundial (Itália, França, Inglaterra, Portugal, Alemanha, Turquia, Brasil, Argentina, Uruguai, Paraguai, Chile, entre outros) pela FIAT, entre 1996 e 2007.", foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuploads.vrum.com.br%2F2022%2F11%2Fc246568a-fiat-marea-2.0-modelo-2001-prata-de-frente-no-estudio-741x417.jpg&f=1&nofb=1&ipt=6fb4a6cab7860231c755d40675d6904aab3579b7bc0b3ee9ad5a075c16a625dc&ipo=images' },
        { marca: 'fiat', modelo: 'Doblo', ano: 2010, cor: 'branco', descricao: "A Fiat apresentou a segunda geração do Doblo em 2010, que foi construída na Turquia e trazia soluções técnicas inusitadas para seu segmento.", foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.autoo.com.br%2Ffotos%2F2009%2F960_640%2Fdoblo_elx_002_960_640.jpg&f=1&nofb=1&ipt=268b6fa05e2c4b994254eb85359d3b05f5c8b38c736e076becf1d811781ea5e3&ipo=images' },
    ]
    return (
        <Pagina titulo="objetos">
            <style jsx global>{`
            img {
                width: 500px;
            }
        `}</style>

            <Container>
                {/* {Carro[2].modelo} */}

                {/* {Carro.map(item => (
                    <div>
                        <h1>{item.marca} - {item.modelo}</h1>
                        <p>Ano: {item.ano}</p>
                        <p>cor: {item.cor}</p>
                        <img src={item.foto} alt={item.modelo}/>
                    </div>
                ))} */}

                <Row md={3}>
                    {Carro.map(item => (
                        <Col className='my-5'>
                            <Card border="primary"  className='bg-dark text-light' style={{ height: '45rem'}}>
                                <Card.Img variant="top" src={item.foto} className="card-img" style={{ overflow: 'hidden', height: '20em'}}/>
                                <Card.Body>
                                    <Card.Title>{item.marca + ' - ' + item.modelo}</Card.Title>
                                    <Card.Text>Cor: {item.cor}</Card.Text>
                                    <Card.Text>{item.descricao}</Card.Text>
                                    <div>
                                        <span>Ano: {item.ano}</span>
                                        <Card.Link href={item.foto}><Button>Entre no carro</Button></Card.Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Pagina>
    )
}

export default Objeto