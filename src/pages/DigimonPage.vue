<template>
  <q-page padding class="bg-grey-2">

    <div class="text-center q-mb-lg">
      <h4 class="text-primary q-my-sm text-weight-bold">Catálogo Digimon</h4>
    </div>

    <div class="row justify-center q-col-gutter-md q-mb-lg">

      <div class="col-12 col-sm-6 col-md-5">
        <q-input
          v-model="store.filterName"
          outlined
          placeholder="Buscar por nombre..."
          bg-color="white"
          dense rounded
          clearable
        >
          <template v-slot:prepend>
            <q-icon name="search" color="primary" />
          </template>
        </q-input>
      </div>

      <div class="col-12 col-sm-4 col-md-3">
        <q-select
          v-model="store.filterLevel"
          :options="store.levels"
          outlined
          dense rounded
          bg-color="white"
          label="Seleccionar Nivel"
          clearable
          options-dense
        >
          <template v-slot:prepend>
            <q-icon name="filter_list" color="secondary" />
          </template>
        </q-select>
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
        <q-card class="my-card q-hoverable cursor-pointer column full-height">
          <q-img :src="digi.img" style="height: 200px" fit="contain" class="q-mt-sm bg-white">
            <div class="absolute-bottom text-subtitle2 text-center">
              {{ digi.level }}
            </div>
          </q-img>

          <q-card-section class="q-mt-auto">
            <div class="text-h6 text-center text-primary text-weight-bold">
              {{ digi.name }}
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div v-if="store.filteredDigimons.length === 0" class="col-12 text-center text-grey q-mt-xl">
        <q-icon name="sentiment_dissatisfied" size="4em" />
        <p class="text-h6">No se encontraron Digimons</p>
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDigimonStore } from 'src/stores/digimonStore'

const store = useDigimonStore()

onMounted(() => {
  store.fetchDigimons()
})
</script>

<style scoped>
.my-card {
  border-radius: 12px;
  transition: transform 0.2s;
  overflow: hidden;
}
.my-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}
</style>
