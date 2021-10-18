<template>
  <div class="reset-password">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal"/>
    <Loading v-if="loading"/>
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Revenir à
          <router-link class="router-link" :to="{ name: 'Login' }">Connexion</router-link>
        </p>
        <h2>Rénitialiser mon Mot de passe</h2>
        <p>Mot de passe Oublié ? Entrer votre email pour le Rénitialiser</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <email class="icon" />
          </div>
        </div>
        <button @click.prevent="resetPassword">Rénitialiser</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import email from "../assets/Icons/envelope-regular.svg";
import Modal from "@/components/Modal";
import Loading from "@/components/Loading";

export default {
  name: "ForgotPassword",
  components:  { Modal, email , Loading},
  data() {
    return{
      email: '',
      modalActive: false,
      modalMessage: "",
      loading: null

    }
  },
  methods: {
    resetPassword() {
      this.loading = true;
      firebase
          .auth()
          .sendPasswordResetEmail(this.email)
          .then(() => {
            this.modalMessage = "Si vous avez déja un compte, vous allez recevoir un mail pour rénitialiser votre mot de passe";
            this.loading = false;
            this.modalActive = true;
          })
          .catch((err) => {
            this.modalMessage = err.message;
            this.loading = false;
            this.modalActive = true;
          });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = ""
    }
  }
}
</script>


<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>

