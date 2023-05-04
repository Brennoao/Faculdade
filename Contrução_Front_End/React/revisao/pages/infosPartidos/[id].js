import React from 'react'

const idPartido = ({}) => {
  return (
    <div>idPartido</div>
  )
}

export default idPartido

export async function getServerSideProps(context) {

    // ID DO DEPUTADOS(A)
    const id = context.params.id

    // REFERENCIA DEPUTADO ÚNICO
    const resultado = await apiDeputados.get('/partidos/' + id)
    const Partido = resultado.data.dados

    // RETORNA VARIÁVEIS DECLARADAS
    return {
        props: { Partido }, // will be passed to the page component as props
    }
}
