var express = require('express');
var router = express.Router();

router.get('/lista', (req, res, next) => {
  res.json(
    [
      { id: 1, total: 20 },
      { id: 2, total: 30 },
      { id: 3, total: 2 }
    ]
  );
});

module.exports = router;