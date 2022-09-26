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
  const categoryData = await Category.findByPk(req.params.id);
  res.json(categoryData);
    });
  
// Create a new category
router.post('/', async (req, res) => {
  const newCategory = await Category.create(req.body)
    res.json(newCategory);
  });

 // update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.json("Category Updated Successfully")
  })
});


// delete a category by its `id` value
router.delete('/:id',  async(req, res) => {
   await Category.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json("The Category has been deleted");
});

module.exports = router;



