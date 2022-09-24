const router = require('express').Router();
const { Tag, Product, ProductTag, } = require('../../models');

// The `/api/tags` endpoint. Below: Get all tags

router.get('/', async (req, res) => {
  const travellerData = await models.Tag.findAll();
  res.json(tagData);
});
// find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  await models.Tag.findOne({
    where : {
      id: req.params.id
    }
  })
    res.json(tag)
  });
  

 // create a new tag
router.post('/', async (req, res) => {
  await models.Tag.create(req.body)
    res.json(newTag)
  });

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update({
    where: {
      id: req.params.id
    }
  }).then(tag => {
    res.json(tag)
  })
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  const tagData = await models.Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json(tagData)
});

module.exports = router;
