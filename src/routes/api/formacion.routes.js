const router = require("express").Router();
const { getAll, create } = require("../../controllers/formacion.controllers");

router.get("/", getAll);
router.post("/", create);

module.exports = router;
