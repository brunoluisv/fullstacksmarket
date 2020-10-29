
exports.up = function(knex) {
    /**
   * Criação da tabela de Tarefas
   * 
   * ID - ID da tarefa [String]: Chave primária
   * DESCR - Descrição da tarefa [String]: Campo não nulo
   * STATE - Estado da tarefa (feito/pendente) [Boolean]: Campo não nulo
   * USER_ID - ID do usuário (Chave estrangeira - relacionamento com a tabela users) [String]: Campo não nulo
   */
  return knex.schema.createTable('tasks', (table) => {
    table.string('id').primary()
    table.string('descr').notNullable()
    table.boolean('state').notNullable()

    table.string('user_id').notNullable()

    table.foreign('user_id').references('id').inTable('users')
  })
};

exports.down = function(knex) {
  // Caso precise voltar atrás da criação da tabela
  return knex.schema.dropTable('tasks')
};
