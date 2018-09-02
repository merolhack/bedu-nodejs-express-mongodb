const express = require('express');
const router = express.Router();

/* GET / */
router.get('/', function(req, res) {
    try {
        return res.json({foo: 1});
    } catch (error) {
        // TODO...
    }
});
/* POST / */
router.post('/', function(req, res) {
    try {
        return res.json();
    } catch (error) {
        // TODO...
    }
});
/* PUT /:id */
router.put('/:id', function(req, res) {
    try {
        return res.json();
    } catch (error) {
        // TODO...
    }
});
/* DELETE /:id */
router.delete('/:id', function(req, res) {
    try {
        return res.json();
    } catch (error) {
        // TODO...
    }
});

module.exports = router;
