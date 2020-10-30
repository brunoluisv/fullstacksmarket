<!-- Componente de criação de um usuário -->
<template>
  <q-page class="flex flex-center">
    <div
      class="flex flex-center"
      style="flex-direction: column; width: 310px; height: 300px; border-radius: 10px; border: 1px solid #ccc; box-shadow: 5px 8px 5px 0px rgba(0,0,0,0.75);"
    >
      <q-icon class="q-mb-lg" color="secondary" name="las la-user-circle" style="font-size: 5em"/>
      <q-input class="q-mb-xl mukta-bold" style="width: 250px;" rounded outlined v-model="name" label="Nome do Usuário" />
      <div style="flex-direction: row">
        <q-btn @click="goBack" class="mukta-bold q-mr-sm" color="red" icon-right="cancel" label="Cancelar" />
        <q-btn @click="add" class="mukta-bold" color="secondary" icon-right="send" label="Cadastrar" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddUser',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions('users', ['createUser', 'setUsers']),
    add () {
      this.createUser({ name: this.name })
        .then((res) => {
          if (res.status === 200) {
            this.setUsers()
              .then((res) => {
                this.$router.go(-1)
              })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
