<template>
  <q-page padding class="bg-grey-2">

    <div class="row justify-center q-mb-lg">
      <div class="col-12 col-md-8 text-center">
        <h4 class="text-primary q-my-sm text-weight-bold">Catálogo Digimon</h4>

        <q-input
          v-model="store.filter"
          outlined
          placeholder="Buscar por Nombre o Nivel (Ej: Agumon, Ultimate)"
          bg-color="white"
          dense rounded
        >
          <template v-slot:append>
            <q-icon name="search" color="primary" />
          </template>
        </q-input>
      </div>
    </div>

    <div v-if="store.loading" class="text-center q-mt-xl">
      <q-spinner-dots color="primary" size="4em" />
      <p class="text-grey">Cargando datos...</p>
    </div>

    <div v-else class="row q-col-gutter-md">
      <div
        v-for="digi in store.filteredDigimons"
        :key="digi.name"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <q-card class="my-card q-hoverable cursor-pointer">
          <q-img :src="digi.img" style="height: 200px" fit="contain" class="q-mt-sm">
            <div class="absolute-bottom text-subtitle2 text-center">
              {{ digi.level }}
            </div>
          </q-img>

          <q-card-section>
            <div class="text-h6 text-center text-primary text-weight-bold">
              {{ digi.name }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDigimonStore } from 'src/stores/digimonStore'

const store = useDigimonStore()

// Cargar apenas entras
onMounted(() => {
  store.fetchDigimons()
})
</script>

<style scoped>
.my-card {
  border-radius: 12px;
  transition: transform 0.2s;
}
.my-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}
</style>
