import React from 'react'
import Pagina from '../../components/Pagina'
import apiArtinstituteChicagoAPI from '../../services/apiArtinstituteChicagoAPI'

const Tipos = ({ArtWork}) => {

  console.log(ArtWork)
  return (
    <Pagina titulo="Tipos de Arte">
      <ol>
        {ArtWork.map(item => (
          <li>{`${item.title} (Atualizado em ${item.updated_at})`}</li>
        ))}
      </ol>
    </Pagina>
  )
}

export default Tipos

export async function getServerSideProps(context) {
  const Art = await apiArtinstituteChicagoAPI.get('/artwork-types')
  const ArtWork = Art.data.data

  return {
    props: { ArtWork }, // will be passed to the page component as props
  }
}