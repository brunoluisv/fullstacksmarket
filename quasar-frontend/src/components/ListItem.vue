<!-- Criação do componente que será a linha com o nome do usuario, seus parâmetros
    são pegos do componente ../pages/Users.vue, passados através do v-bind -->
<template>
  <div>
    <q-slide-item @right="onRight" right-color="red">
      <template v-slot:right>
        <q-icon name="delete" />
      </template>

      <q-item bordered clickable @click="getTasks(id)" v-ripple>
        <q-item-section avatar>
          <q-icon color="secondary" name="account_circle" size="md"/>
        </q-item-section>

        <q-item-section class="mukta-medium" style="font-size: 1.2em">{{ name }}</q-item-section>
      </q-item>
    </q-slide-item>
    <q-separator/>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="red" text-color="white" />
          <span class="q-ml-md mukta-bold">Deseja excluir o usuário {{ name }}?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary"  v-close-popup />
          <q-btn flat label="Confirmar" color="primary" @click="delUser(id)" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ListItem',
  data () {
    return {
      confirm: false
    }
  },
  props: {
    id: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    }
  },
  methods: {
    // Importação das funções necessárias dos módulos 'users' e 'tasks' (VUEX)
    ...mapActions('users', ['deleteUser', 'setUsers']),
    ...mapActions('tasks', ['setTasks']),
    getTasks (id) {
      this.setTasks({ id: id })
        .then((res) => {
          this.$router.push({ name: 'tasks', params: { userId: id } })
        })
    },
    delUser (id) {
      this.deleteUser({ id: id })
        .then((res) => {
          this.setUsers()
        })
    },
    onRight ({ reset }) {
      this.confirm = true
      this.finalize(reset)
    },
    finalize (reset) {
      this.timer = setTimeout(() => {
        reset()
      }, 1000)
    }
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  }
}
</script>
