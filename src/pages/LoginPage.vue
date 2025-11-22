<template>
  <q-page class="flex flex-center bg-primary">
    <q-card style="width: 350px; padding: 20px">
      <q-card-section class="text-center">
        <div class="text-h5 text-bold text-primary">Iniciar Sesión</div>
        <div class="text-grey-6">Examen PC2</div>
      </q-card-section>

      <q-card-section>
        <q-input filled v-model="email" label="Correo Electrónico" class="q-mb-md" type="email">
          <template v-slot:prepend><q-icon name="email" /></template>
        </q-input>

        <q-input filled v-model="password" label="Contraseña" type="password">
          <template v-slot:prepend><q-icon name="lock" /></template>
        </q-input>
      </q-card-section>

      <q-card-actions vertical>
        <q-btn color="primary" size="lg" label="Ingresar" :loading="loading" @click="handleLogin" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from 'src/stores/authStore'
import { useRouter } from 'vue-router'

const store = useAuthStore()
const router = useRouter()

// Credenciales por defecto del examen (para ahorrar tiempo)
const email = ref('guerrero@peru.com')
const password = ref('12345678')
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  // Llamamos a la acción del store
  const success = await store.login(email.value, password.value)
  loading.value = false

  if (success) {
    // Si el login funciona, nos manda a TU página de Digimons
    router.push('/digimon')
  }
}
</script>
