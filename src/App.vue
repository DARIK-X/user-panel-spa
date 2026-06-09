<script setup>
 import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <div class="wrapper">
      <header-component></header-component>
      <div class="container">
        <RouterView></RouterView>
      </div>
</div>
</template>

<style scoped>

.wrapper{
  width: 100%;
  height: 100vh;
}

.container{
  max-width: 1200px;
  margin: 0 auto;
  padding: max(20px) max(40px);

  min-height: 80%;
}

</style>
