const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [
      Product
    ]
  }).then(categories => {
    res.json(categories);
  })
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  console.log(req.params);
  Category.findOne({
    where : {
      id: req.params.id
    }
  }).then(category => {
    res.json(category)
  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
}).then(newCategory => {
  res.json(newCategory)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    where: {
      id: req.params.id
    }
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;
