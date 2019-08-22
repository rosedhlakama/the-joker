exports.seed = function (knex, Promise) {
  return knex('jokes').insert([
    { id: 99901, name: 'Nic Matthews', joke: 'Why did a crow win an award? Because he was outstanding in his field.'},
    { id: 99902, name: 'July  Seng', joke: 'What did the giant say after he ate Tonga?...I want Samoa' },
    { id: 99903, name: 'Rose Dhlakama', joke: 'The shovel was a ground breaking invention.' },
    { id: 99904, name: 'Sylvia Gilbert-Potts', joke: 'A dyslexic guy walks into a bra' },
    { id: 99905, name: 'Nic Matthews', joke: 'What did the farmer say when he lost his tractor?..... Wheres my tractor?' }
  ])
}
