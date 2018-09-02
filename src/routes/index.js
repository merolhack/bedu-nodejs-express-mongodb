const express = require('express');
const router = express.Router();

const Question = require('../db/models/Question');

/* GET home page. */
router.get('/', async function(req, res) {
  const questions = await Question.find();
  const options = {
    title: 'Welcome to the Q/A forum',
    questions: questions
  };
  res.render('index', options);
});
/* GET create post. */
router.get('/create', function(req, res) {
  const options = {
    title: 'Create a question'
  };
  res.render('create', options);
});
/* GET View the post. */
router.get('/read/:slug', function(req, res) {
  const options = {
    title: 'Bar'
  };
  res.render('read', options);
});



module.exports = router;
