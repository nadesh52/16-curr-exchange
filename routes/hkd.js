const express = require("express");
const router = express.Router();

const { getAll, create } = require("../controllers/hkd");

router.get("/hkd", getAll);
router.post("/hkd", create);

module.exports = router;
