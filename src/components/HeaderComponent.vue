<script setup>
import {useAuthStore} from "../store/AuthStore.js";
import {useRouter} from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

async function logout() {
  await authStore.logout();
  router.push("/");
  // location.reload();
}
</script>

<template>
  <header class="header">
    <nav class="header-nav">
        <ul class="menu text-2xl">
          <li class="list">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="list">
            <RouterLink to="/user/adverts">My Adverts</RouterLink>
          </li>
          <li class="list">
            <RouterLink to="/adverts/create">create Adverts</RouterLink>
          </li>
          <li class="list">
            <RouterLink to="/profile">My profile</RouterLink>
          </li>
        </ul>
      <div v-if="!authStore.isAuthenticated" class="btn-container">
        <RouterLink class="btn btn-green" to="/login">Войти</RouterLink>
        <RouterLink class="btn btn-blue" to="/register">Регистрация</RouterLink>
      </div>
      <div v-else class="btn-container">
        <button @click="logout" class="btn btn-red" >Выйти</button>
      </div>

    </nav>
  </header>
</template>

<style scoped>

.header{
  width: 100%;
  padding: max(20px);
  background: #e4e4e4;
}

.header-nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu{
  width: 100%;
  display: flex;
  justify-content: center;
  gap: max(30px);
}

.btn-container{
  display: flex;
  align-items: center;
}

</style>