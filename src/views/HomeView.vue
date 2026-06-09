<script setup>
import axios from 'axios';
import {useRouter} from "vue-router";
import {onMounted, reactive, ref} from "vue";

const adverts = ref([])



async function loadAdverts(data){
  try {
    let response = await axios.get('https://module-c/api/adverts',data);
    adverts.value = response.data;
  }catch(err){
    console.log(err);
  }
}


onMounted(() => {
  loadAdverts();
})

</script>

<template>





  <div v-for="(value, index) in adverts" :key="index" class="content">
    <router-link :to="'/adverts/'+value.id">
      <h1 class="title font-bold">
        {{value.title}}
      </h1>
      <p class="description">
        {{value.text}}
      </p>
      <p>price: {{value.price}}</p>
      <p class=" text-blue-400">
          Category: {{value.category}} date: {{value.created_at}}
      </p>
    </router-link>
  </div>
</template>

<style scoped>



.content a{
  text-decoration: none;
  padding: max(30px);
  display: block;
  border: 1px solid #505050;
  border-radius: 5px;
  margin: max(20px) auto;
  transition: 0.4s;

  &:hover{
    background-color: rgba(225, 225, 225, 0.32);
    transform: scale(1.05);
  }

}

</style>