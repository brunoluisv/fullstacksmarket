<!-- Componente de confirmação de mudança de estado de uma tarefa -->
<template>
  <q-page class="flex flex-center">
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar v-if="state === 1" icon="toggle_on" color="green" text-color="white" />
          <q-avatar v-if="state === 0" icon="toggle_off" color="warning" text-color="white" />
          <span v-if="state === 1" class="q-ml-md mukta-bold">Mudar estado da tarefa "{{ descr }}" para FEITO"?</span>
          <span v-if="state === 0" class="q-ml-md mukta-bold">Mudar estado da tarefa "{{ descr }}" para Pendente"?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn @click="goBack" flat label="Cancelar" color="primary" v-close-popup />
          <q-btn @click="updateState" flat label="Confirmar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ConfirmUpdateState',
  created () {
    this.confirm = true
  },
  data () {
    return {
      confirm: false,
      id: this.$route.params.id,
      descr: this.$route.params.descr,
      state: this.$route.params.state,
      userId: this.$route.params.userId
    }
  },
  methods: {
    ...mapActions('tasks', ['changeStateTask', 'setTasks']),
    goBack () {
      this.$router.go(-1)
    },
    updateState () {
      this.changeStateTask({ id: this.id, state: this.state, userId: this.userId })
        .then((res) => {
          if (res.status === 204) {
            this.setTasks({ id: this.userId })
              .then((res) => {
                this.goBack()
              })
          }
        })
    }
  }
}
</script>
