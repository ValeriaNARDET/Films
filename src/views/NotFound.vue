<template>
    <div class="wrapper">
      <IconUpsetFace />

      <h3 class="text">SORRY... PAGE NOT FOUND</h3>
      <button class="btn" @click="$router.push({ name: 'films' })">
        Go To the Main Page
      </button>
    </div>
</template>

<script setup>
import IconUpsetFace from '../components/icons/IconUpsetFace.vue';
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
}
.text {
  font-size: 36px;
  color: #ff82ad;
}
</style>