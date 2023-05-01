import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

export default function Home() {
  return (
    <Pagina titulo="Página 1">
      <Container>
        <p>paragrafo 1</p>
        <p>paragrafo 2</p>
        <p>paragrafo 3</p>
      </Container>
    </Pagina>
  )
}
