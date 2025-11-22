import { defineStore } from 'pinia'
import { api } from 'boot/axios'
import { Notify } from 'quasar'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),

  actions: {
    async login(email, password) {
      try {
        // API exacta del examen
        const response = await api.post('https://storedb-api.onrender.com/node-api/users/signin', {
          email: email,
          password: password,
        })

        // Guardamos los datos si el login es exitoso
        // (La estructura depende de la API, asumimos que devuelve accessToken o similar)
        this.token = response.data.accessToken
        this.user = { email: email }

        Notify.create({
          type: 'positive',
          message: '¡Bienvenido! Inicio de sesión exitoso.',
        })

        return true // Retorna verdadero para avisar que sí entró
      } catch (error) {
        console.error(error)
        Notify.create({
          type: 'negative',
          message: 'Error: Usuario o contraseña incorrectos.',
        })
        return false // Retorna falso si falló
      }
    },

    logout() {
      this.user = null
      this.token = null
    },
  },
})
