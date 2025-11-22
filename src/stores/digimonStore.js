import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useDigimonStore = defineStore('digimon', {
  state: () => ({
    digimons: [], // Aquí se guardan los datos
    filter: '',   // Aquí se guarda lo que escribas en el buscador
    loading: false
  }),

  getters: {
    // Esta función filtra la lista automáticamente por Nombre o Nivel
    filteredDigimons: (state) => {
      if (!state.filter) return state.digimons
      const busqueda = state.filter.toLowerCase()
      return state.digimons.filter(d =>
        d.name.toLowerCase().includes(busqueda) ||
        d.level.toLowerCase().includes(busqueda)
      )
    }
  },

  actions: {
    async fetchDigimons() {
      this.loading = true
      try {
        // URL exacta que pide el examen
        const response = await api.get('https://digimon-api.vercel.app/api/digimon')
        this.digimons = response.data
      } catch (error) {
        console.error('Error al descargar digimons:', error)
      } finally {
        this.loading = false
      }
    }
  }
})
