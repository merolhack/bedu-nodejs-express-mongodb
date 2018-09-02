var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function (req, res) {
  try {
    return res.json();
  } catch (error) {
    // TODO...
  }
});

module.exports = router;
