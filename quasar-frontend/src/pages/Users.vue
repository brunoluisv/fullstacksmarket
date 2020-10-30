<!-- Componente da listagem de usuários -->
<template>
  <q-page class="flex">
    <div class="full-width bg-white">
      <q-list>
        <q-item bordered class="text-center flex flex-center bg-secondary" v-ripple>
          <q-item-section>
            <q-item-label class="mukta-bold text-white" style="font-size: 1.4em">
              Usuários<q-icon name="las la-users" class="q-ml-sm" size="lg" color="white"/>
            </q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn @click="add" class="mukta-medium" color="teal" icon="add" label="Adicionar Usuário" />
          </q-item-section>
        </q-item>
        <!-- Chamada do Componente ../components/ListItem.vue, que renderiza todos os usuarios -->
        <ListItem
          v-for="user in users"
          :key="user.id"
          v-bind="user"
        />
        <div v-if="users.length === 0" class="absolute-center">
          <h4 class="mukta-bold">Nenhum usuário adicionado</h4>
        </div>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ListItem from '../components/ListItem'

export default {
  name: 'Users',
  computed: {
    ...mapState('users', ['users'])
  },
  components: {
    ListItem
  },
  mounted () {
    this.setUsers()
  },
  methods: {
    ...mapActions('users', ['setUsers']),
    add () {
      this.$router.push({ name: 'add-user' })
    }
  }
}
</script>
