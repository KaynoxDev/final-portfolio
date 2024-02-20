    <script setup>
    import { ref, onMounted } from 'vue';
    import cv from '../assets/img/cv.png';
    import cdc from '../assets/img/cdc.png';
    import ec from '../assets/img/ec.png';
    import dam from '../assets/img/dam.png';

    const projects = [
    { id: 1, title: 'CV', imageSrc: cv },
    { id: 2, title: 'Espace Commentaire', imageSrc: ec },
    { id: 3, title: 'Cahier des charges', imageSrc: cdc },
    { id: 4, title: 'Damier', imageSrc: dam },
    { id: 5, title: 'Jeu du Morpion', imageSrc: cv }
    ];

    const visibleProjects = ref([]);
    const startIndex = ref(0);
    const endIndex = ref(2);
    const myProject = ref(null);

    onMounted(() => {
    updateVisibleProjects();
    
    });

    function updateVisibleProjects() {
        visibleProjects.value = projects.slice(startIndex.value, endIndex.value);

    // blocage du scroll horizontal si la souris est dans le container myProject
        myProject.value.addEventListener('mouseenter', () => {
        document.body.style.overflowY = 'hidden';
        
    });

    myProject.value.addEventListener('mouseleave', () => {
        document.body.style.overflow = 'auto';
    });
    }

    // fonction pour le scroll vertical 

    function onWheel(event) {
    if (event.deltaY > 0) {

        if (endIndex.value < projects.length) {
        startIndex.value++;
        endIndex.value++;
        updateVisibleProjects();
        }
    } else {
        
        if (startIndex.value > 0) {
        startIndex.value--;
        endIndex.value--;
        updateVisibleProjects();
        }
    }
    }





    </script>

    <template>
        <div id="project">
        <section id="myProject" ref="myProject">
        <h2>Mes Projets</h2>
        <article>
            <ul ref="projectList" @wheel="onWheel">
    <li v-for="project in visibleProjects" :key="project.id">
        <h3>{{ project.title }}</h3>
        <img :src="project.imageSrc" alt="images de mes projets">
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
    margin-top: 100px;
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
    width: 100%;
    height: 500px;
    border-radius: 10px;
    }


    </style>