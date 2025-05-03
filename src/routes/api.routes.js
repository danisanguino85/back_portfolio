const router = require("express").Router();

router.use("/experiencia", require("./api/experiencia.routes"));
router.use("/formacion", require("./api/formacion.routes"));
router.use("/mailing", require("./api/mailing.routes"));

module.exports = router;
