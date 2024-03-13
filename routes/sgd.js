const express = require("express");
const router = express.Router();

const { getAll, create } = require("../controllers/sgd");

router.get("/sgd", getAll);
router.post("/sgd", create);

module.exports = router;
