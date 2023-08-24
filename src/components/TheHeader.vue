<template>
  <div class="main-heading">
    <h1>Cinema King</h1>
  </div>
</template>

<style scoped>
h1 {
  font-size: 36px;
  text-align: center;
  font-family: Arial;
  color: #b8c0c1;

  &::before,
  &::after {
    display: inline-block;
    content: "";
    border-top: 4px solid #b8c0c1;
    border-bottom: 2px solid #b8c0c1;
    width: 80px;
    height: 12px;
    margin: -20px 30px;
    transform: translateY(-30px);
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 48px;
  }
}

@media (min-width: 756px) {
  h1 {
    font-size: 62px;
  }
}
</style>