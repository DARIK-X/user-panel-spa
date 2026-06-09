<script setup>
import {useAuthStore} from "../store/AuthStore.js";
import {ref} from "vue";
import {useRouter} from "vue-router";

const authStore = useAuthStore();

const login = ref()
const password = ref()


async function handleSubmit(e) {
  e.preventDefault();
  await authStore.login({
    login: login.value,
    password: password.value,
  });
    if (authStore.isAuthenticated) {
      useRouter().push("/profile");
      location.reload();
    };
}




</script>

<template>
  <form action="" class="form">
    <div class="form-group">
      <label for="phone">login</label>
      <input v-model="login" type="tel" name="" id="" placeholder="Email or Number" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input v-model="password" type="password" name="" id="" placeholder="Password" />
    </div>

    <div v-if="authStore.error">
      <p class="text-red-500" >{{authStore.error}}</p>
    </div>

    <button @click="handleSubmit" class="btn btn-blue btn-100" >Войти</button>

  </form>
</template>

<style scoped>

</style>