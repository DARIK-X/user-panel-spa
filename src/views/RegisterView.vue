<script setup>
import {useAuthStore} from "../store/AuthStore.js";
import {ref} from "vue";
import {useRouter} from "vue-router";

const authStore = useAuthStore();

const email = ref()
const password = ref()
const phone = ref()


async function handleSubmit(e) {
  e.preventDefault();
  await authStore.register({
    email: email.value,
    password: password.value,
    phone: phone.value,
  });
  setTimeout(function () {
    if (authStore.isAuthenticated) {
      useRouter().push("/profile");
      location.reload();
    }
  }, 500);
}




</script>

<template>
  <form action="" class="form">
    <div class="form-group">
      <label for="email">Email</label>
      <input v-model="email" type="email" name="" id="" placeholder="Enter email" />
    </div>
    <div class="form-group">
      <label for="phone">phone</label>
      <input v-model="phone" type="tel" name="" id="" placeholder="Phone Number" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input v-model="password" type="password" name="" id="" placeholder="Password" />
    </div>

    <div v-if="authStore.error">
      <p class="text-red-500" >{{authStore.error}}</p>
    </div>

    <button @click="handleSubmit" class="btn btn-blue btn-100" >Регистрация</button>

  </form>
</template>

<style scoped>

</style>