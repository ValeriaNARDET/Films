<template>
  <div class="film">
    <h1>This is an film page</h1>
    <p>{{ film }}</p>
    <p>{{ film.Title }}</p>
    <p>{{ film.Country }}</p>
    <p>{{ film.Type }}</p>
    <p>{{ film.Genre }}</p>
    <p>{{ film.Plot }}</p>
    <p>{{ film.Director }}</p>
    <p>{{ film.Actors }}</p>
    <p>{{ film.Releazed }}</p>
    <p>{{ film.Runtime }}</p>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useFilmsStore } from '../stores/filmsStore';
import { useRoute } from 'vue-router';

const route = useRoute();

const filmsStore = useFilmsStore();
filmsStore.getFilm(route.params.id);

const {
  film
} = storeToRefs(filmsStore);
</script>

<style>
@media (min-width: 1024px) {
  .film {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
