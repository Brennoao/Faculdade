import { Row, Table } from 'react-bootstrap';
import Pagina from '../components/Pagina';
import apiArtinstituteChicagoAPI from '../services/apiArtinstituteChicagoAPI';
import { IoSearchSharp } from "react-icons/io5";
import Link from 'next/link'

export default function Home({ ArtWork }) {

  console.log(ArtWork)
  return (
    <>
      <Pagina titulo="Obras de Arte">
        <Row md={12}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Detalhes</th>
                <th>Título</th>
                <th>Artista</th>
                <th>Departamento</th>
              </tr>
            </thead>
            <tbody>
              {ArtWork.data.map(item => (
                <tr key={item.id}>
                  <td><Link href={'/infosArt/' + item.id}><IoSearchSharp /></Link></td>
                  <td>{item.title}</td>
                  <td>{item.artist_title}</td>
                  <td>{item.department_title}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Pagina>
    </>
  )
}


export async function getServerSideProps(context) {
  const Art = await apiArtinstituteChicagoAPI.get('/artworks')
  const ArtWork = Art.data

  return {
    props: { ArtWork }, // will be passed to the page component as props
  }
}