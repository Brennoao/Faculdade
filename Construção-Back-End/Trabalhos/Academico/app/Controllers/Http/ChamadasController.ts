// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Chamada from "App/Models/Chamada";
import ChamadaValidator from "App/Validators/ChamadaValidator";

export default class ChamadasController {
    index ({request}){
        const {aulaId, alunoId, presenca} = request.all()
        const chamada = Chamada.query().preload('aulas').preload('alunos')

        if (aulaId) {
            chamada.where('aulaId', aulaId)            
        }else if (alunoId) {
            chamada.where('alunosId', alunoId)
        }else if (presenca) {
            chamada.where('presenca', presenca)
        }

        return chamada
    }

    async store ({request}){
        const dados = await request.validator(ChamadaValidator)

        return Chamada.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        
        return Chamada.find(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const chamada = await Chamada.findOrFail(id)

        return chamada.delete()
    }

    async update({request}) {
        const id  = request.param('id')
        const data = request.only(["aulaId", "alunosId", "presenca"])

        const update = await Chamada.findOrFail(id)
        update.merge(data).save()

        return update
    }
}
