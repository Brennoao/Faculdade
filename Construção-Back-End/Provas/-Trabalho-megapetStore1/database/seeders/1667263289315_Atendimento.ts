import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Atendimento from 'App/Models/Atendimento'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run () {
    await Atendimento.createMany([
      {data: DateTime.local(2022, 5, 15, 12, { locale: "br" }), descricao: "Procedimento", petId: 1, funcionarioId: 2, procedimentoId: 2},
      {data: DateTime.local(2022, 5, 15, 12, { locale: "br" }), descricao: "Procedimento", petId: 1, funcionarioId: 2, procedimentoId: 2},
      {data: DateTime.local(2022, 5, 15, 12, { locale: "br" }), descricao: "Procedimento", petId: 1, funcionarioId: 2, procedimentoId: 2},
      {data: DateTime.local(2022, 5, 15, 12, { locale: "br" }), descricao: "Procedimento", petId: 1, funcionarioId: 2, procedimentoId: 2},
      {data: DateTime.local(2022, 5, 15, 12, { locale: "br" }), descricao: "Procedimento", petId: 1, funcionarioId: 2, procedimentoId: 2},      
    ])
  }
}
