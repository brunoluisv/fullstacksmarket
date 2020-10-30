<!-- Componente de confirmação de exclusão de uma tarefa -->
<template>
  <q-page class="flex flex-center">
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="red" text-color="white" />
          <span class="q-ml-md mukta-bold">Deseja excluir a tarefa {{ descr }}"?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn @click="goBack" flat label="Cancelar" color="primary" v-close-popup />
          <q-btn @click="delTask" flat label="Confirmar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ConfirmDeleteTask',
  created () {
    this.confirm = true
  },
  data () {
    return {
      confirm: false,
      id: this.$route.params.id,
      descr: this.$route.params.descr,
      userId: this.$route.params.userId
    }
  },
  methods: {
    ...mapActions('tasks', ['deleteTask', 'setTasks']),
    goBack () {
      this.$router.push({ name: 'tasks', params: { userId: this.userId } })
    },
    delTask () {
      this.deleteTask({ taskId: this.id, userId: this.userId })
        .then((res) => {
          this.setTasks({ id: this.userId })
            .then((res) => {
              this.goBack()
            })
        })
    }
  }
}
</script>
