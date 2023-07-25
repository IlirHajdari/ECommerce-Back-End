const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// Get all categories by 'id' value
router.get("/", (req, res) => {
  Category.findAll({
    include: [{ model: Product }],
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

// To get one category by 'id' value only
router.get("/:id", (req, res) => {
  Category.findOne({
    include: [{ model: Product }],
    where: { id: req.params.id },
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

// Creates new category by 'id' value
router.post("/", (req, res) => {
  Category.create(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

// Updates category by 'id' value
router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: { id: req.params.id },
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

// Delete category by 'id' value
router.delete("/:id", (req, res) => {
  Category.destroy({
    where: { id: req.params.id },
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
