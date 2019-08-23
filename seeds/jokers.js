
exports.seed = function(knex, Promise) {
    return knex('jokers').insert([
        {id: 88801, joker: 'Nic Matthews', about: 'funny'},
        {id: 88802, joker: 'July Seng', about: 'so so funny'},
        {id: 88803, joker: 'Sylvia Gilbert-Potts', about: 'oh my god hilarious'},
        {id: 88804, joker: 'Rose Dhlakama', about: 'terribly funny'}

      ]);
};
