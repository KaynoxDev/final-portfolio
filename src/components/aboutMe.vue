<script setup></script>
<template>
  <div id="aboutMe">
    <section id="me">
      <img src="../assets/img/me.png" alt="" />
      <p>Romain Chauvard</p>
      <p>Développeur Web Junior</p>
      <ul>
        <li>
          <img src="../assets/img/html.png" alt="logo du language html" />
          <div class="skills">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </li>
        <li>
          <img src="../assets/img/css.png" alt="logo du language css" />
          <div class="skills">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </li>
        <li>
          <img src="../assets/img/js.png" alt="logo du language js" />
          <div class="skills">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
        </li>
      </ul>
    </section>
    <section id="myHistory">
      <h2>Présentation</h2>
      <p>
        Bonjour, je suis un passionné de l’informatique depuis toujours. Mon parcours professionnel
        est assez diversifié et riche en expériences. J’ai commencé ma carrière dans la cuisine à
        l’âge de 16 ans, mais j’ai dû arrêter à 20 ans en raison des horaires difficiles à concilier
        avec une vie de famille. Par la suite, j’ai exploré le domaine de la cryptomonnaie en
        faisant du streaming. J’ai également travaillé chez Ledger, où j’ai contribué à la
        fabrication de leurs portefeuilles crypto. J’ai ensuite fait de l’intérim avant de devenir
        cariste. Malgré ces différentes expériences, ma passion pour l’informatique n’a jamais
        faibli. Étant père de quatre enfants, je n’avais jamais pris le temps de me consacrer
        pleinement à cette passion.
      </p>
      <p>
        Aujourd’hui, j’ai décidé de sauter le pas et de me lancer dans la carrière qui me correspond
        le mieux : le développement web. Je suis enthousiaste à l’idée d’évoluer dans ce domaine et
        j’ai hâte de voir où cette nouvelle aventure me mènera.
      </p>
    </section>
  </div>
</template>

<style scoped>
#aboutMe {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  line-height: 30px;
}

#me {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

#me p {
  width: 30%;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 20px;
}

#me img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 20px;
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

section img {
  width: 50px;
  height: 50px;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #043444;
  box-shadow: 5px 5px 20px #bcc9ce;
  width: 80%;
  border-radius: 1%;
  padding-top: 20px;
  margin-top: 50px;
}

#me li img {
  width: 50px;
  height: 50px;
  border-radius: 30%;
}

#me li {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
}

#myHistory {
  margin-top: 200px;
}

.checked {
  color: #0484b7;
}

.skills {
  border-radius: 10%;
}
</style>
