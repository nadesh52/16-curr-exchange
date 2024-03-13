const express = require("express");
const router = express.Router();

const { getAll, create } = require("../controllers/jpy");

router.get("/jpy", getAll);
router.post("/jpy", create);

module.exports = router;
