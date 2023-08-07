<template>
  <div class="loader-wrapper">
    <h2 class="loader-title"> {{ loadingMessage }}</h2>
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useFilmsStore } from "../stores/filmsStore";
const filmsStore = useFilmsStore();

const {
  loadingMessage
} = storeToRefs(filmsStore);

</script>

<style scoped>
.loader-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  z-index: 99;
  background: #17277ea1;
}

.loader-title {
  font-size: 42px;
  color: #ffcdde;
}

.loader span {
  border-radius: 100%;
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 3px 2px;
  animation: loader 0.8s linear infinite alternate;
}

.loader span:nth-child(1) {
  animation-delay: -1s;
  background: rgba(245, 103, 115, 0.6);
}

.loader span:nth-child(2) {
  animation-delay: -0.8s;
  background: rgba(245, 103, 115, 0.8);
}

.loader span:nth-child(3) {
  animation-delay: -0.26666s;
  background: rgba(245, 103, 115, 1);
}

.loader span:nth-child(4) {
  animation-delay: -0.8s;
  background: rgba(245, 103, 115, 0.8);

}

.loader span:nth-child(5) {
  animation-delay: -1s;
  background: rgba(245, 103, 115, 0.4);
}

@keyframes loader {
  from {
    transform: scale(0, 0);
  }

  to {
    transform: scale(1, 1);
  }
}
</style>