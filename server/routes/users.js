const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get('/login', (req, res) => {
    res.send("This would be the login page");
  });
  return router;
};
