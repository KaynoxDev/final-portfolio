    <script setup>
    import { ref, onMounted } from 'vue';
    import cv from '../assets/img/cv.png';
    import cdc from '../assets/img/cdc.png';
    import ec from '../assets/img/ec.png';
    import dam from '../assets/img/dam.png';
    
    const projects = [
    { id: 1, title: 'CV', imageSrc: cv, github: "https://github.com/KaynoxDev/Devoir-CV" },
    { id: 2, title: 'Espace Commentaire', imageSrc: ec, github: "https://github.com/KaynoxDev/Devoir-DynamiserUnEspaceCommentaire" },
    { id: 3, title: 'Cahier des charges', imageSrc: cdc },
    { id: 4, title: 'Damier', imageSrc: dam },
    { id: 5, title: 'Jeu du Morpion', imageSrc: cv }
    ];

    const visibleProjects = ref([]);
    const startIndex = ref(0);
    const endIndex = ref(1);
  
    function disableScroll() {
        document.body.style.overflowY = 'hidden';
    }

    function enableScroll() {
        document.body.style.overflow = 'auto';
    }

    onMounted(() => {
    visibleProjects.value = projects.slice(startIndex.value, endIndex.value + 1);
 
  
});

    // fonction pour le scroll vertical 

    function onWheel(event) {
    if (event.deltaY > 0) {
        if (endIndex.value < projects.length -1) {
            startIndex.value++;
            endIndex.value++;
        }
    } else {
        if (startIndex.value > 0) {
            startIndex.value--;
            endIndex.value--;
        }
    }
    visibleProjects.value = projects.slice(startIndex.value, endIndex.value + 1);
}



import ModalComponent from '@/components/Modal.vue';

const isModalOpened = ref(false);
  const currentProject = ref(null);

  const openModal = (project) => { 
    currentProject.value = project; 
    isModalOpened.value = true;
  };

  const closeModal = () => {
    isModalOpened.value = false;
  };

    </script>

    <template>
        <div id="project">
        <section id="myProject" @mouseenter="disableScroll" @mouseleave="enableScroll" >
        <h2>Mes Projets</h2>
        <article>
            <ul ref="projectList" @wheel="onWheel">
                <li v-for="project in visibleProjects" :key="project.id">
        
        <h3>{{ project.title }}</h3>
        <button @click="openModal(project)"><img :src="project.imageSrc" alt="images de mes projets"></button>
            <ModalComponent :isOpen="isModalOpened" @modal-close="closeModal">
              <template #header>{{ currentProject.title }}</template> 
              <template #content>
                <button id="gauche"></button>
                <img :src="currentProject.imageSrc" alt="image du projet selectionné"> 
                <button id="droite"></button>
              </template>
              <template #footer>
                <p>HTML / CSS</p>
                <div id="timeGit">
                <p>Créer le 03/02/2024</p>
                <a :href="currentProject.github"><img id="git" src="../assets/img/github.svg" alt=""></a>
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

    section h2 ,section p{
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

    #myProject{
    display: flex ;
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
    height: 600px;
    border-radius: 10px;
    }

    #git{
        width: 50px;
        height: 50px;
    }

    #timeGit {
        display: flex;
        align-items: center;
        width: 500px;
        justify-content: space-between;
    }
    </style>
    