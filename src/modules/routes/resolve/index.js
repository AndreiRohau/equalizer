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

router.get('/content/popular', async (req, res) => {
  console.log(req)
  const data = {
    topic: faker.random.arrayElement([
      ["Квадратные уравнения"], 
      ["Линейные уровнения"], 
      ["Система уравнений"], 
      ["Решение интегралов"], 
      ["Система уравнений"], 
      ["Yравнения вида sinx a"]
    ]),
    popular: faker.random.arrayElement([
      ['2x^2 + 3x + 9 = 0'], ['5x^2 + 3x + 9 = 0'], ['6x^2 + 3x = 0'], ['5x^2 = 0'], ['x^2 + 7 = 0'], ['-8x^2 + 7x + 33 = 0'],
    ]),
    watched: faker.random.number()
  };
  console.log(req);
  const uuid = faker.random.uuid();
  res.status(200);
  res.send({ ...data, uuid });
  res.end();
});

router.get('/content/authors', async (req, res) => {
  console.log(req)
  const data = {
    names: faker.random.arrayElement([
      ["Таня", "Ваня", "Маня", "Саня"], 
      ["Оля", "Зоя", "Коля", "Моня"],
    ]),
    cities: faker.random.arrayElement([
      ["Варкута", "Москва", "Рязань", "Минск"], 
      ["Гомель", "Иркутск", "Киев", "Дрезден"],
    ]),
    imgs: faker.random.arrayElement([
      ["../../1.jpg", "../../2.jpg", "../../3.jpg", "../../4.jpg"], 
      ["../../5.jpg", "../../6.jpg", "../../7.jpg", "../../8.jpg"],
    ]),
  };
  console.log(req);
  const uuid = faker.random.uuid();
  res.status(200);
  res.send({ ...data, uuid });
  res.end();
});


router.get('/content/author', async (req, res) => { 
  console.log(req) 
    const data = {
      authors: faker.random.arrayElement([ 
        [
          {author: "Valia", city: "Minsk", subj: faker.random.number(10), photo: faker.image.avatar()},
          {author: "Kolya", city: "Lipr", subj: faker.random.number(10), photo: faker.image.avatar()},
          {author: "Tanya", city: "Gjosa", subj: faker.random.number(10), photo: faker.image.avatar()}
        ],
        [
          {author: "Valia", city: "Minsk", subj: faker.random.number(10), photo: faker.image.avatar()},
          {author: "Kolya", city: "Lipr", subj: faker.random.number(10), photo: faker.image.avatar()},
          {author: "Tanya", city: "Gjosa", subj: faker.random.number(10), photo: faker.image.avatar()}
        ],
      ])
    }
  console.log(req); 
  const uuid = faker.random.uuid(); 
  res.status(200); 
  res.send({ ...data, uuid }); 
  res.end(); 
  });

module.exports = router;
