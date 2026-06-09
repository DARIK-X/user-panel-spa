<script setup>
import {useAuthStore} from "../store/AuthStore.js";
import {onMounted, reactive, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";


const authStore = useAuthStore();
const user = ref();
const error  = ref()

const name = ref();
const email = ref();
const phone = ref();

async function getUser(){
  try {
    let response = await axios.get('https://module-c/api/user',  {
      headers: {
        'Authorization': 'Bearer ' + authStore.token
      }
    });
    console.log(response)

    user.value = response.data;
    name.value = response.data.name;
    phone.value = response.data.phone;
    email.value = response.data.email;
  }catch(err){
    console.log(err);
    if(err.response && err.response.data){
      error.value = err.response.data;
    }
  }
}

async function updateProfile(e){
  e.preventDefault();
  try {
    let response = await axios.patch('https://module-c/api/user', {
      name: name.value,
      email: email.value,
      phone: phone.value,
    },{
      headers: {
        'Authorization': 'Bearer ' + authStore.token
      }
    });
  }catch(err){
    if(err.response && err.response.data){
      error.value = err.response.data;
    }
    console.log(err);
  }
}



onMounted(()=>{
  getUser()
})
</script>

<template>
<h2>
  ваши данные
</h2>
  <form action="">
    <div>
      <label for=""> ваша имя: </label>
      <input type="text" v-model="name" placeholder="добавте имя"  id="">
    </div>
    <div>
      <label for=""> email: </label>
      <input type="text" v-model="email"  id="">

    </div>
    <div>
      <label for=""> phone: </label>
      <input type="text" v-model="phone"  id="">

    </div>

    <div v-if="error"  class="text-red-500">err</div>
    <button @click="updateProfile" class="btn btn-green">Изменить</button>
  </form>
</template>

<style scoped>
form{
  width: 100%;
}
form div {
  display: grid;
  gap: 20px;
  margin: 20px;
}

form div  input{
  outline: none;
  border: 1px solid #ccc;
}
</style>