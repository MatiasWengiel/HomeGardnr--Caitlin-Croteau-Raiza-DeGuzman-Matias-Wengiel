const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.send("This would be the user_plants page");
  });
  return router;
};
