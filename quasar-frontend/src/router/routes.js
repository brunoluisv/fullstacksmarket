// Todas as rotas da aplicação
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'users', path: '/', component: () => import('pages/Users.vue') },
      { name: 'add-user', path: '/adduser', component: () => import('pages/AddUser.vue') },
      { name: 'tasks', path: '/tasks', component: () => import('pages/Tasks.vue') },
      { name: 'add-task', path: '/addtask', component: () => import('pages/AddTask.vue') },
      { name: 'confirm-delete-task', path: '/confirm-delete', component: () => import('pages/ConfirmDeleteTask.vue') },
      { name: 'confirm-update-state', path: '/confirm-update', component: () => import('pages/ConfirmUpdateState.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
