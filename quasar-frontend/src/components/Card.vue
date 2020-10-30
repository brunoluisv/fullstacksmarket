<!-- Criação do template de Card que servirá para mostrar as tarefas do usuario seus parâmetros são passados através do v-bind no componente ../pages/Tasks.vue
-->
<template>
  <q-card class="my-card q-ma-md">
    <div class="flex flex-center q-pa-md">
      <q-icon class="q-mb-lg" color="secondary" name="note" style="font-size: 5em"/>
    </div>
    <q-separator/>
    <q-list>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon color="primary" name="subtitles" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="mukta-medium">Descrição</q-item-label>
          <q-item-label caption>{{ descr }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator/>
      <q-item @click="changeState()" clickable v-if="state === 1">
        <q-item-section avatar>
          <q-icon size="md" color="teal" name="toggle_on" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="mukta-medium">Estado</q-item-label>
          <q-item-label caption>FEITO</q-item-label>
        </q-item-section>
      </q-item>

      <q-item @click="changeState()" clickable v-if="state === 0">
        <q-item-section avatar>
          <q-icon size="md" color="warning" name="toggle_off" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="mukta-medium">Estado</q-item-label>
          <q-item-label caption>Pendente</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator/>
      <q-item clickable @click="openDialog()">
        <q-item-section avatar>
          <q-icon color="red" name="delete" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="mukta-bold">Excluir Tarefa</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: {
      required: true,
      type: String
    },
    descr: {
      required: true,
      type: String
    },
    state: {
      required: true,
      type: Number
    },
    user_id: {
      required: true,
      type: String
    }
  },
  methods: {
    openDialog () {
      // ir para a rota 'confirm-delete-task' passando os parâmetros necessários
      this.$router.push({ name: 'confirm-delete-task', params: { id: this.id, descr: this.descr, userId: this.user_id } })
    },
    changeState () {
      // Fazer a mudança do estado da aplicação e ir para a rota 'confirm-update-state' passando os parâmetros necessários
      const newstate = (this.state === 0) ? 1 : 0
      this.$router.push({ name: 'confirm-update-state', params: { id: this.id, descr: this.descr, state: newstate, userId: this.user_id } })
    }
  }
}
</script>
