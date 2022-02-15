
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name: 'Pet the cat', details: 'Pet the cat', priority: '3', completed: 'true' },
        {id: 2, name: 'Feed the cat', details: 'Feed the cat', priority: '1', completed: 'false' },
        {id: 3, name: 'Water the cat', details: 'Water the cat', priority: '2', completed: 'false' }
      ]);
    });
};
