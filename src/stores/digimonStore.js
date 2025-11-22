import { defineStore } from 'pinia'
import { api } from 'boot/axios'

export const useDigimonStore = defineStore('digimon', {
  state: () => ({
    digimons: [],
    filterName: '',    // Filtro de texto
    filterLevel: null, // Filtro de nivel
    loading: false,
    levels: ['Fresh', 'Training', 'Rookie', 'Champion', 'Ultimate', 'Mega', 'Armor']
  }),

  getters: {
    filteredDigimons: (state) => {
      let data = state.digimons

      // Filtro por Nivel
      if (state.filterLevel) {
        data = data.filter(d => d.level === state.filterLevel)
      }

      // Filtro por Nombre
      if (state.filterName) {
        const search = state.filterName.toLowerCase()
        data = data.filter(d => d.name.toLowerCase().includes(search))
      }

      return data
    }
  },

  actions: {
    async fetchDigimons() {
      this.loading = true
      try {
        const response = await api.get('https://digimon-api.vercel.app/api/digimon')
        this.digimons = response.data
      } catch (error) {
        console.error('Error cargando digimons:', error)
      } finally {
        this.loading = false
      }
    }
  }
})
