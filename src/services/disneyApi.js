import { $host } from './api'

export const disneyApi = {
  async getAll({ page = 1 } = {}) {
    try {
      const { data } = await $host.get('', { params: { page } })
      return data
    } catch (error) {
      throw new Error('Ошибка при загрузке персонажей')
    }
  },
  async getOne(id) {
    try {
      const { data } = await $host.get(`/${id}`)
      return data
    } catch (error) {
      throw new Error('Ошибка при загрузке персонажа')
    }
  },
}
