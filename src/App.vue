<template>
  <div class="wrapper">

    <!--    <header></header>-->

    <div class="wrapper-content">

      <section>
        <div class="container">

          <!--          First modal-->
          <button class="btn btnPrimary" @click="showModal=!showModal">Show modal</button>
          <modal
              title="New modal"
              v-show="showModal"
              @close="showModal=false"
          >
            <!--            идет вместо slot в Modal-->
            <div slot="body">
              <p>Some modal text</p>
              <button class="btn btnPrimary" @click="showModal=!showModal">Accept</button>
            </div>
          </modal>

          <!--          Second modal-->
          <button class="btn btnPrimary" @click="modalSecond.show=!modalSecond.show">Show form</button>
          <modal
              title="Form modal"
              v-show="modalSecond.show"
              @close="modalSecond.show=false"
          >
            <!--            идет вместо slot в Modal-->
            <div slot="body">
              <form @submit.prevent="submitSecondForm">
                <label>Name</label>
                <input type="text" v-model="modalSecond.name" required>
                <label>Email</label>
                <input type="email" v-model="modalSecond.email" required>
                <button class="btn btnPrimary">Send</button>
              </form>
            </div>
          </modal>


          <!--          modal with validate-->
          <button class="btn btnPrimary" @click="modalValidate=!modalValidate">Show form with validate</button>
          <modalValidate v-show="modalValidate" @close="modalValidate=false"/>

        </div>
      </section>


    </div>

    <!--    <footer></footer>-->

  </div>
</template>

<script>


import modal from "@/components/UI/Modal";
import modalValidate from "@/components/ModalValidate";

export default {
  components: {modal, modalValidate},
  data() {
    return {
      showModal: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate:false,

    }
  },
  computed: {},
  methods: {
    submitSecondForm() {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
    }

  }

}
</script>

<style>
</style>
