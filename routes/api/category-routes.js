const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// find all categories
  // be sure to include its associated Products
router.get('/', (req, res) => {
  Category.findAll({
    include: [
      Product
    ]
  }).then(categories => {
    res.json(categories);
  })
});
// find one category by its `id` value
  // be sure to include its associated Products

router.get('/:id', async (req, res) => {
  const categoryData = await models.Category.findbyPK(req.params.id);
    });
  
// Create a new category
router.post('/', async (req, res) => {
  const newCategory = await models.Category.create(req.body)
    res.json(newCategory);
  });

 // update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update({
    where: {
      id: req.params.id
    }
  }).then(category => {
    res.json(category)
  })
});


// delete a category by its `id` value
router.delete('/:id',  async(req, res) => {
  const categoryData = await models.Category.destroy({
    where: {
      id: req.params.id
    }
  });
  res,json(categoryData);
});

module.exports = router;



// Category.findOne({
//   where : {
//     id: req.params.id
