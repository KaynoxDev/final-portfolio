<script setup>
import image from '../assets/img/logotest.png'
import { ref } from 'vue'

const x = ref(0)
const y = ref(0)

const mouseMove = (event) => {
  x.value = event.clientX / window.innerWidth
  y.value = event.clientY / window.innerHeight
}

const activeMenu = ref('Accueil') // Initialise le menu actif sur 'Accueil'

const setActiveMenu = (menu) => {
  activeMenu.value = menu
}


</script>

<template>
  <header>
    <a href="#"><img
        alt="logo de kaynoxdev"
        :src="image"
        @mousemove="mouseMove"
        :style="{ transform: 'translate(' + x * 50 + 'px, ' + y * 20 + 'px)' }"></a>
      
    
    

    <nav>
      <a :class="{ active: activeMenu === 'Accueil' }" href="#" @click="setActiveMenu('Accueil')">Accueil</a>
      <a :class="{ active: activeMenu === 'Présentation' }" href="#myHistory" @click="setActiveMenu('Présentation')">Présentation</a>
      <a :class="{ active: activeMenu === 'Mes projets' }" href="#myProject" @click="setActiveMenu('Mes projets')">Mes projets</a>
      <a :class="{ active: activeMenu === 'Contact' }" href="#form" @click="setActiveMenu('Contact')">Contact</a>
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
  height: 130px;
  align-items: center;
  border-bottom: 0.1rem solid #0484b7;
  position: fixed;
  overflow: auto;
  top: 0;
}

a :active {
  text-decoration: underline;
}

img {
  width: 100px;
  height: 80px;
  transition: transform 0.2s ease;
}


nav {
  display: flex;
  justify-content: space-between;
  width: 40%;
  font-size: 20px;
}

.active {
  text-decoration: underline;
}


</style>
