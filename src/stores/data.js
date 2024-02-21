import { ref } from 'vue'

    export const projects = [
    {
        id: ref(1),
        title: 'Mon CV',
        imageSrc: ref("src/assets/img/cv.png"),
        techno: ref("HTML / CSS"),
        currentImage: ref("src/assets/img/cv.png"),
        project_link: ref("https://github.com/KaynoxDev/Devoir-CV"),
        logo_link: ref("src/assets/img/github.svg"),
        createdAt: ref( 'Crée le 03/02/2024'),
        picture: ref(['src/assets/img/projects/cv/cv1.svg', 'src/assets/img/projects/cv/cv2.svg' , 'src/assets/img/projects/cv/cv3.svg', "src/assets/img/projects/cv/cv4.svg"])
    },
  {
    id: ref(2),
    title: 'Espace Commentaire',
    imageSrc: ref("src/assets/img/ec.png"),
    techno: ref("HTML / CSS / JS"),
    currentImage: ref("src/assets/img/ec.png"),
    project_link: ref('https://github.com/KaynoxDev/Devoir-DynamiserUnEspaceCommentaire'),
    logo_link: ref("src/assets/img/github.svg"),
    createdAt: ref('Crée le 09/02/2024'),
    picture: ref(['src/assets/img/projects/ec/ec1.svg', 'src/assets/img/projects/ec/ec2.svg', 'src/assets/img/projects/ec/ec3.svg'])
  },
  { 
    id: ref(3), 
    title: 'Cahier des charges', 
    techno: ref("WORD"),
    imageSrc: ref("src/assets/img/cdc.png"),
    currentImage: ref("src/assets/img/cdc.png"),
    project_link: ref("src/assets/files/cdc.pdf"),
    logo_link: ref("src/assets/img/pdf.svg"),
    createdAt: ref('Crée le 13/02/2024'),
    picture: ref(['src/assets/img/projects/cdc/cdc3.svg', 'src/assets/img/projects/cdc/cdc2.svg', 'src/assets/img/projects/cdc/cdc1.svg'])
  },
  { 
    id: ref(4), 
    title: 'Damier',
    techno: ref("HTML / JS"),
    imageSrc: ref("src/assets/img/damier.svg"),
    currentImage: ref("src/assets/img/dam.png"),
    project_link: ref("https://github.com/KaynoxDev/Damier"),
    logo_link: ref("src/assets/img/github.svg"),
    createdAt: ref('Crée le 16/02/2024'),
    picture: ref(["src/assets/img/damier.svg"])
},
  { 
    id: ref(5), 
    title: 'Jeu du Morpion',
    techno: ref("HTML / CSS / JS"),
    imageSrc: ref('src/assets/img/projects/mrp/mrp1.svg'),
    currentImage: ref('src/assets/img/projects/mrp/mrp1.svg'),
    project_link: ref("https://github.com/KaynoxDev/Morpion"),
    logo_link: ref("src/assets/img/github.svg"),
    createdAt: ref('Crée le 20/02/2024'),
    picture: ref(['src/assets/img/projects/mrp/mrp1.svg', 'src/assets/img/projects/mrp/mrp2.svg', 'src/assets/img/projects/mrp/mrp3.svg'])
  }
]
