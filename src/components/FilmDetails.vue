<template>
    <div class="fullstory">
        <div class="img-wrapper">
            <img :src="film.Poster" :alt="film.Title" :title="film.Title">
        </div>

        <div class="glance-details">
            <div class="glance-details-item">
                <p class="name">Title</p>
                <p class="value"><b>{{ film.Title }}</b></p>
            </div>
            <div class="glance-details-item">
                <p class="name">Year</p>
                <p class="value">{{ film.Year }}</p>
            </div>
            <div class="glance-details-item">

                <p class="name">Country</p>
                <p class="value">{{ film.Country }}</p>
            </div>
            <div class="glance-details-item">

                <p class="name">Director</p>
                <p class="value">{{ film.Director }}</p>
            </div>
            <div class="glance-details-item">

                <p class="name">Actors</p>
                <p class="value">{{ film.Actors }}</p>
            </div>
            <div class="glance-details-item">

                <p class="name">Runtime</p>
                <p class="value">{{ film.Runtime }}</p>
            </div>
            <div class="glance-details-item">

                <p class="name">Genre</p>
                <p class="value">{{ film.Genre }}</p>
            </div>
        </div>
    </div>

    <button class="btn" @click="$router.push({ name: 'films' })">
        Search another film
      </button>
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

<style scoped>
.fullstory {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 50px;
    padding: 20px 10px 30px;
    border-radius: 15px;
    background-color: #27729c;
}

.img-wrapper {
    margin-right: 20px;
    border-radius: 10px;
    width: 200px;
    height: 300px;
    overflow: hidden;
}

.img-wrapper img {
    width: 200px;
    height: 300px;
}

.glance-details {
    padding-bottom: 10px;
    overflow: hidden;
}

.glance-details-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.name,
.value {
    height: 40px;
    border-bottom: 1px solid #393939;
    line-height: 50px;
    color: #fafbfc;
}

.name {
    flex-basis: 90px;
    min-width: 90px;
    border-right: 1px solid #393939;
    font-size: 14px;
}

.value {
    flex-grow: 1;
    padding-left: 8px;
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>
