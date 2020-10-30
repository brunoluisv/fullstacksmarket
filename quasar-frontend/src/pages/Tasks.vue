<!-- Componente da listagem de todas as tarefas -->
<template>
  <q-page>
    <q-toolbar class="bg-secondary text-white">
      <q-btn class="mukta-medium" @click="goBack" dense flat color="light" icon="arrow_back" />
      <q-toolbar-title class="text-center mukta-bold">
        Tarefas
      </q-toolbar-title>
      <q-btn @click="add" class="mukta-medium" color="teal" icon="add" label="Adicionar Tarefa" />
    </q-toolbar>

    <div class="flex">
      <!-- Chamada do Componente ../components/Card.vue, que renderiza todas as tarefas do usuario segundo seu id -->
      <Card
        v-for="task in tasks"
        :key="task.id"
        v-bind="task"
        :userId="userId"
      />
      <div v-if="tasks.length === 0" class="absolute-center">
        <h4 class="mukta-bold">Nenhuma tarefa adicionada</h4>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'
import Card from '../components/Card'
export default {
  name: 'Tasks',
  data () {
    return {
      userId: this.$route.params.userId
    }
  },
  computed: {
    ...mapState('tasks', ['tasks'])
  },
  components: {
    Card
  },
  methods: {
    add () {
      this.$router.push({ name: 'add-task', params: { user_id: this.userId } })
    },
    goBack () {
      this.$router.push({ name: 'users' })
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 300px
  max-width: 300px
</style>
