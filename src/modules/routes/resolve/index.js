const express = require('express');
const router = express.Router();
const faker = require('faker');
const cash = new Map();

router.get('/resolve', async (req, res) => {
  const data = {
    statement: req.query.statement,
    propose: faker.random.arrayElement([
      ['2x^2 + 3x + 9 = 0', '5x^2 + 3x + 9 = 0', '6x^2 + 3x = 0', '5x^2 = 0', 'x^2 + 7 = 0', '-8x^2 + 7x + 33 = 0'],

      ['6x^2 + 3x = 0', '5x^2 = 0', 'x^2 + 7 = 0', '-8x^2 + 7x + 33 = 0', '2x^2 + 3x + 9 = 0', '5x^2 + 3x + 9 = 0'],

      ['8x^3 + 3x = 0', '25x^3 = 0', 'x^3 + 7 = 0', '-33x^3 + 7x + 33 = 0', '44x^3 + 3x + 9 = 0', '57x^3 + 3x + 9 = 0'],

      ['655x^3 + 3x = 0', '3ax^3 = 0', '34x^3 + 7 = 0', '-343x^3 + 7x + 33 = 0', '447x^3 + 3x + 9 = 0', '57x^3 + 3x + 9 = 0'],
    ]),
    solutions: faker.random.arrayElement([
      ['x = 1 + y * 7', 'y = 1 + x * 8', 'x = 19/x + y * 73', 'x = 21 + 4/x - y * 7'],
      ['z = 1 + y * 7', 'y = 1 + z * 8', 'z = 19/z + y * 73', 'z = 21 + 4/z - y * 7'],
      ['z = 1 + x * 7', 'z = 1 + x * 8', 'x = 19/x + z * 73', 'x = 21 + 4/x - z * 7'],
    ]),
    answer: faker.random.number(),
    text: req.query.statement,
  };
  console.log(req);
  const uuid = faker.random.uuid();
  console.log('resolve:', uuid);
  cash.set(uuid, data);
  console.log(cash);
  res.status(200);
  res.send({ ...data, uuid });
  res.end();
});

router.get('/resolve/:id', async (req, res) => {
  const uuid = req.params.id;
  console.log('GET cash', uuid);

  console.log(cash);
  res.status(200);
  res.send({ ...cash.get(uuid), uuid });
  res.end();
});

module.exports = router;
