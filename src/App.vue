<template>
  <BackGround />

  <div id="main-container">
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>

  <TheLoader v-if="isLoading" />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useFilmsStore } from './stores/filmsStore';
import BackGround from './components/BackGround.vue';
import TheLoader from './components/TheLoader.vue';

const filmsStore = useFilmsStore();
const {
  isLoading
} = storeToRefs(filmsStore);

</script>
