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

    
    </style>