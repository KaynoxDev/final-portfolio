<template>
  
  <form @submit.prevent="onSubmit" id="form" ref="form">
    <h2> Contactez-moi ! </h2>
    <div>
      
      <label for="name">Entrer votre nom</label>
      <input id="name" ref="name" type="text" placeholder="KaynoxDev" required>
    </div>
    <div>
      <label for="subject">L'objet de votre message</label>
      <input id="subject" ref="subject" type="text" placeholder="Document manquant" required>
    </div>
    <div>
      <label for="message">Votre message ici</label>
      <textarea  id="message" ref="message" rows="20" cols="100" placeholder="Mon message" required />
    </div>
    <button type="submit" value="send" @click="showMessage">Envoyer</button>
    <p class="message_sent" v-show="messageSent">Message envoyé à {{ mail }}</p>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';

// Define form fields
const name = ref('');
const subject = ref('');
const message = ref('');

// Define email address from environment variable
const mail = import.meta.env.VITE_MAIL_ADRESS;

// Define message_sent as false initially
const messageSent = ref(false);

// Check if all fields are not empty
const isFormValid = computed(() => {
  return name.value && subject.value && message.value;
});

// Function to be called on form submit
const onSubmit = () => {
  if (isFormValid.value) {
    // If all fields are not empty, set message_sent to true
    messageSent.value = true;
    document.querySelector("form").reset()
    setTimeout(() => {
      messageSent.value = ""
      
    }, 1500);


  }
};
</script>

<style scoped>

h2 {
  padding-right: 500px;
}

form {
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: 150px;
    margin-left: 130px;
    background-color: #043444;  
    box-shadow: 5px 5px 20px #bcc9ce;
    width: 80%;
    border-radius: 1%;
    color: var(--secondary-color);
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
</style>