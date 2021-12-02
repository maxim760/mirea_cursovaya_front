import axios from 'axios'

const $host = axios.create({
  baseURL: 'https://api.disneyapi.dev/characters',
})

export { $host }
