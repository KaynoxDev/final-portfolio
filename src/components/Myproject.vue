    <script setup>

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