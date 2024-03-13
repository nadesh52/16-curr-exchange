const express = require("express");
const router = express.Router();

const { getAll, create } = require("../controllers/usd");

router.get("/usd", getAll);
router.post("/usd", create);

module.exports = router;
