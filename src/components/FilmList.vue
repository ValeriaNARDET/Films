<template>
  <div ref="scrollComponent">
    <ul>
      <li v-for="film in filmList" :key="film.imdbID">
        <button @click="getFilmDetails(film.imdbID, film.Title)">
          <FilmItem :film="film" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useFilmsStore } from '../stores/filmsStore';
import FilmItem from "./FilmItem.vue";

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
})

const router = useRouter();
const filmsStore = useFilmsStore();
filmsStore.getFilmList();

const {
  filmList
} = storeToRefs(filmsStore);

const scrollComponent = ref(null);

async function getFilmDetails(imdbID, title) {
  await filmsStore.getFilm(imdbID);

  if (title) {
    let t = title.replaceAll(' ', '_')
    router.push({ name: 'filmDetails', params: { id: imdbID }, query: { t } })
  }
}

function handleScroll() {
  const element = scrollComponent.value;
  if (element) {
    if (element.getBoundingClientRect().bottom < window.innerHeight) {
      filmsStore.page++;
      filmsStore.loadNextPage(filmsStore.page);
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  padding: 50px 0 0;
}

li {
  margin: 20px 0;
  width: 18%;
  list-style-type: none;
}

button {
  width: 100%;
  border: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  outline: 0;
}
</style>