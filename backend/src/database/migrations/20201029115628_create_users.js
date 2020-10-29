
exports.up = function(knex) {
  /**
   * Criação da tabela de Usuários
   * 
   * ID - ID do Usuário [String]: Chave primária
   * NAME - Nome do Usuário [String]: Campo não nulo
   */
  return knex.schema.createTable('users', (table) => {
    table.string('id').primary()
    table.string('name').notNullable()
  })
};

exports.down = function(knex) {
  // Caso precise voltar atrás da criação da tabela
  return knex.schema.dropTable('users')
};
