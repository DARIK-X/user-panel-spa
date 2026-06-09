<script setup>
import {useRoute, useRouter} from "vue-router";
import {useAuthStore} from "../store/AuthStore.js";
import {onMounted, ref} from "vue";
import axios from "axios";

const route = useRoute();
const authStore = useAuthStore();


const photo = ref()
const advert = ref({})
const tel__ = ref()

async function getAdvert(){
  const id = route.params.id;
  try{
    let response = await axios.get('https://module-c/api/adverts/'+ id, {
      headers: {'Authorization': `Bearer ${authStore.token}`},
    })
    advert.value = response.data


    if(advert.value.photos.length > 0){
      photo.value = advert.value.photos[0];
    }
    console.log(advert.value, advert.value.title)
  }catch (err){
    console.log(err)
  }
}


onMounted(() => {
  getAdvert();
})


function setPhoto (index) {
  photo.value = advert.value.photos[index];
}

</script>

<template>
<div class="content">
  <h1 class="title">
    {{advert.title}}
  </h1>
  <p>{{advert.text}}</p>
  <div class="container-image">
    <div class="image mb-5">
      <img :src="photo" >
    </div>
    <div class="mini-images">
      <img v-for="(value , index) in advert.photos" @click="setPhoto(index)" :src="value"  :key="index" alt="">
    </div>
  </div>

  <p class="mb-1 font-bold">
    цена: {{advert.price}}
  </p>
  <p class="mb-1 font-bold">
    категория: {{advert?.category_id?.name}}
  </p>
  <p class="mb-1 font-bold">
  дата: {{advert.created_at}}
</p>
  <pre class="mb-1 font-bold">автор: {{advert?.user_id?.name}}
<!--    <p >Телeфон автора: {{$advert?.user_id?.phone}}</p>-->
</pre>

</div>
</template>

<style scoped>

.title{
  font-size: 2rem;
  font-weight: bold;
}

.container-image{
  background: #cccccc;
  width: 100%;
  padding: 20px;
}

.image{
  width: max(600px, 200px);
  margin: 0 auto;
  margin-bottom: 40px;
}


.mini-images{
  display: flex;
  align-items: center;
  gap: 20px;
  overflow: auto;
  margin: 0 auto;

}
.mini-images img{
  width: 150px;
  transition: 0.3s;
  &:hover{
    opacity: 0.8;
    box-shadow: 0 0 10px 0  #ffb700;
  }
}
</style>