// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Sala from "App/Models/Sala";

export default class SalasController {
    index (){
        return Sala.all()
    }

    async store ({request}){
        const data = request.only(["nome", "capacidade", "tipo"])
        
        return await Sala.create(data)
    }
}
