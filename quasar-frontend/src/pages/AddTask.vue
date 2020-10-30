<!-- Componente de criação de uma tarefa -->
<template>
  <q-page class="flex flex-center">
    <div
      class="flex flex-center"
      style="flex-direction: column; width: 310px; height: 300px; border-radius: 10px; border: 1px solid #ccc; box-shadow: 5px 8px 5px 0px rgba(0,0,0,0.75);"
    >
      <q-icon class="q-mb-lg" color="secondary" name="las la-tasks" style="font-size: 5em"/>
      <q-input class="mukta-bold" style="width: 250px;" rounded outlined v-model="descr" label="Descrição da tarefa" />
      <div class="q-gutter-sm mukta-regular q-mt-sm q-mb-md">
        <q-radio v-model="state" :val="true" label="Feito" />
        <q-radio v-model="state" :val="false" label="Pendente" />
      </div>
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
  name: 'AddTask',
  data () {
    return {
      descr: '',
      state: false,
      user_id: this.$route.params.user_id
    }
  },
  methods: {
    ...mapActions('tasks', ['createTask', 'setTasks']),
    add () {
      this.createTask({ descr: this.descr, state: this.state, userId: this.user_id })
        .then((res) => {
          if (res.status === 200) {
            this.setTasks({ id: this.user_id })
              .then((res) => {
                this.$router.push({ name: 'tasks', params: { userId: this.user_id } })
              })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goBack () {
      this.$router.push({ name: 'tasks', params: { userId: this.user_id } })
    }
  }
}
</script>
