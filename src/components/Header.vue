<script setup>
import { RouterLink } from 'vue-router'
import image from '../assets/img/logo.png'
import { ref } from 'vue';

const x = ref(0);
const y = ref(0);

const mouseMove = (event) => {
  x.value = event.clientX / window.innerWidth;
  y.value = event.clientY / window.innerHeight;
};


</script>

<template>
  <header>
      <router-link to="/">
      <img alt="logo de kaynoxdev" :src="image" @mousemove="mouseMove" :style="{ transform: 'translate(' + x * 50 + 'px, ' + y* 20 + 'px)' }"/>
  </router-link>
    
    
      <nav>
        <a href="#" >Accueil</a>
        <a :href="'#myHistory'">Présentation</a>
        <a :href="'#myProject'">Mes projets</a>
        <a :href="'#form'">Contact</a>
      </nav>

  </header>
</template>

<style scoped>

header {
  background-color: #043444;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  width: 80%;
  max-width: 1230px;
  height: 150px;
  align-items: center;
  border-bottom: 0.1rem solid #0484b7;
  position: fixed;
  overflow: auto;
  top: 0;
}

img {
  width: 125px;
  height: 125px;
  transition: transform 0.2s ease;
}

nav {
  display: flex;
  justify-content: space-evenly;
  width: 30%;
}


</style>