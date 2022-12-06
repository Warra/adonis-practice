import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Dog from '../../Domains/Dog'

export default class PracticeController {
    public async index(ctx: HttpContextContract) {
        const dog = new Dog()
        const species = dog.getAllSpecies()

        if (!species) {
            return ctx.response.send('Error getting dog species')
        }

        return species
    }
}
