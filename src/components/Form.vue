<template>
  <form @submit.prevent="onSubmit" id="form" ref="form">
    <h2>Contactez-moi !</h2>
    <div>
      <label for="name">Entrer votre nom</label>
      <input id="name" ref="name" type="text" placeholder="KaynoxDev" required />
    </div>
    <div>
      <label for="subject">L'objet de votre message</label>
      <input id="subject" ref="subject" type="text" placeholder="Document manquant" required />
    </div>
    <div>
      <label for="message">Votre message ici</label>
      <textarea
        id="message"
        ref="message"
        rows="20"
        cols="100"
        placeholder="Mon message"
        required
      />
    </div>
    <button type="submit" value="send" @click="showMessage">Envoyer</button>
    <p class="message_sent" v-show="messageSent">Message envoyé à {{ mail }}</p>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'

const name = ref('')
const subject = ref('')
const message = ref('')


const mail = import.meta.env.VITE_MAIL_ADRESS

// Défini messageSent en false au départ
const messageSent = ref(false)

// Vérifie si les champs sont remplis
const isFormValid = computed(() => {
  return name.value && subject.value && message.value
})


const onSubmit = () => {
  if (isFormValid.value) {

    messageSent.value = true
    document.querySelector('form').reset()
    setTimeout(() => {
      messageSent.value = ''
    }, 1500)
  }
}
</script>

<style scoped>
h2 {
  padding-right: 500px;
  text-decoration: underline;
  color: #04a3e3;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 150px;
  margin-left: 65px;
  background-color: #043444;
  box-shadow: 5px 5px 20px #bcc9ce;
  width: 90%;
  border-radius: 1%;
  color: #04a3e3;
}

label {
  background-color: var(--primary-color);
}

button {
  margin-top: 10px;
  width: 100px;
  height: 50px;
  border-radius: 20px;
  background-color: var(--secondary-color);
}

textarea {
  border-radius: 10px;
}

div {
  display: flex;
  flex-direction: column;
}

#form {
  scroll-margin-top: 130px; /* match this with the height of your header */
}
</style>
