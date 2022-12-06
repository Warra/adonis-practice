import axios from 'axios'
import attempt from '@assertchris/attempt-promise'
import Logger from '@ioc:Adonis/Core/Logger'

export default class Dog {
    public async getAllSpecies() {
        const [ error, species ] = await attempt(axios.get('https://dog.ceo/api/breeds/list/all', {
            decompress: false,
            headers: {
                'accept-encoding': '*'
            }
        }))

        if (error) {
            console.error(error)
            Logger.error('Failed to get dog species')
            return false
        }

        return species.data
    }
}