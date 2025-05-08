const router = require("express").Router();
const {
  getAll,
  create,
  getById,
} = require("../../controllers/formacion.controllers");

router.get("/", getAll);
router.post("/", create);
router.get("/:formacionId", getById);

module.exports = router;
