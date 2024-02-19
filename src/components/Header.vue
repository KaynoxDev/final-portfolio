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
        <a :href="'#myContact'">Contact</a>
      </nav>

  </header>
</template>

<style scoped>


</style>