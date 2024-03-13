const express = require("express");
const router = express.Router();

const { getAll, create } = require("../controllers/eur");

router.get("/eur", getAll);
router.post("/eur", create);

module.exports = router;
