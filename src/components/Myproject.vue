<script setup>
import { ref, onMounted } from 'vue'
import { projects } from '../stores/data.js'

const dataTable = ref(projects)

const visibleProjects = ref([])
const startIndex = ref(0)
const endIndex = ref(1)

function disableScroll() {
  document.body.style.overflowY = 'hidden'
}

function enableScroll() {
  document.body.style.overflow = 'auto'
}

onMounted(() => {
  visibleProjects.value = projects.slice(startIndex.value, endIndex.value + 1)
})

// fonction pour le scroll vertical

function onWheel(event) {
  if (event.deltaY > 0) {
    if (endIndex.value < projects.length - 1) {
      startIndex.value++
      endIndex.value++
    }
  } else {
    if (startIndex.value > 0) {
      startIndex.value--
      endIndex.value--
    }
  }
  visibleProjects.value = projects.slice(startIndex.value, endIndex.value + 1)
}

let pictureIndex = ref(0) // Ajoutez cette ligne pour garder une trace de l'index de l'image actuelle

import ModalComponent from '@/components/Modal.vue'

const isModalOpened = ref(false)
const currentProject = ref(dataTable.value[0])

const openModal = (project) => {
  currentProject.value = project
  isModalOpened.value = true
}

const closeModal = () => {
  isModalOpened.value = false
}

const changePicture = () => {
  pictureIndex.value = (pictureIndex.value + 1) % currentProject.value.picture.length
  currentProject.value.currentImage = currentProject.value.picture[pictureIndex.value] // Changez cette ligne
}
</script>

<template>
  <div id="project">
    <section id="myProject" @mouseenter="disableScroll" @mouseleave="enableScroll">
      <h2>Mes Projets</h2>
      <article>
        <ul ref="projectList" @wheel="onWheel">
          <li v-for="project in visibleProjects" :key="project.id">
            <h3>{{ project.title }}</h3>
            <button @click="openModal(project)">
              <img id="pictureProject" :src="project.imageSrc" alt="images de mes projets" />
            </button>
            <ModalComponent :isOpen="isModalOpened">
              <template #header>
                <div id="closebtn">
                  {{ currentProject.title }}
                  <button id="btn" @click="closeModal(project)">X</button>
                </div>
              </template>
              <template #content>
                <div id="btnnext">
                  <button id="btnchange" @click="changePicture">&larr;</button>
                  <img
                    id="imgproject"
                    :src="currentProject.currentImage"
                    alt="image du projet selectionné"
                  />
                  <button id="btnchange" @click="changePicture">&rarr;</button>
                </div>
              </template>
              <template #footer>
                <div id="timeGit">
                  <p>{{ currentProject.createdAt }}</p>
                  <p>{{ currentProject.techno }}</p>
                  <a :href="currentProject.project_link" target="_blank" rel="noopener"
                    ><img id="git" :src="currentProject.logo_link" alt=""
                  /></a>
                </div>
              </template>
            </ModalComponent>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #043444;
  box-shadow: 5px 5px 20px #bcc9ce;
  width: 80%;
  border-radius: 1%;
}

section h2,
section p {
  display: flex;
  justify-content: center;
  padding: 5px;
  color: var(--secondary-color);
  letter-spacing: 2px;
  color: #04a3e3;
}

section h2 {
  text-decoration: underline;
}

#myProject {
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 200px;
}

#project {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}

article {
  width: 100%;
  color: var(--secondary-color);
}

ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin: 10px;
}

img {
  width: 400px;
  height: 500px;
  border-radius: 10px;
}

#git {
  width: 40px;
  height: 40px;
}

#timeGit {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 500px;
}

#timeGit a:hover {
  background-color: white;
  border-radius: 10px;
}

#pictureProject, #imgproject {
  transition: box-shadow 0.3s ease-in-out;
}

#pictureProject:hover, #imgproject:hover {
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.3);
}

button {
  height: 500px;
  border-radius: 20px;
}

#imgproject {
  width: 800px;
  height: 500px;
}

#btn {
  border: none;
  width: 0px;
  height: 20px;
  font-size: 20px;
  color: white;
}

#btnchange {
  background-color: var(--primary-color);
  color: white;
  border: none;
  margin-left: 10px;
  margin-right: 50px;
  width: 0;
  height: 40px;
  font-size: 40px;
}

#btnnext {
  display: flex;
  align-items: center;
}

#closebtn {
  display: flex;
  font-weight: bold;
  color: var(--secondary-color);
  text-transform: capitalize;
  font-size: 20px;
  width: 700px;
  letter-spacing: 2px;
  align-items: center;
  justify-content: space-between;
}

#myProject {
  scroll-margin-top: 130px; /* match this with the height of your header */
}
</style>
