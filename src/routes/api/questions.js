const express = require('express');
const router = express.Router();
const Validator = require('validatorjs');
const slugify = require('slugify')
const Question = require('../../db/models/Question');

const rules = {
    title: 'required|string|min:3|max:120',
    content: 'required|string|min:3',
    author: {
        name: 'required|string|min:3'
    },
    tags: 'required|array',
};

/* GET / */
router.get('/', async function (req, res) {
    try {
        const questions = await Question.find().exec();
        return res.json({
            data: questions,
        });
    } catch (error) {
        // TODO...
    }
});
/* GET /:slug */
router.get('/:slug', async (req, res) => {
    try {
        const slug = req.params.slug;
        const question = await Question.findOne({ slug }).exec();
        return res.json(question);
    } catch (err) {
        // TODO: Cath exception
    }
});
/* POST / */
router.post('/', function (req, res) {
    const data = req.body;
    data.slug = slugify(data.title);
    const validation = new Validator(data, rules);
    if (validation.fails()) {
        return res.json({
            errors: validation.errors.errors
        });
    }
    try {
        const createdQuestion = new Question(data);
        createdQuestion.save();
        return res.json({ message: "Question created!" });
    } catch (error) {
        // TODO...
    }
});
/* PUT /:slug */
router.put('/:slug', async function (req, res) {
    const slug = req.params.slug;
    if (slug && slug !== '') {
        const data = req.body;
        const putRules = (({ title, content, tags }) => ({ title, content, tags }))(rules);
        const validation = new Validator(data, putRules);
        if (validation.fails()) {
            return res.json({
                errors: validation.errors.errors
            });
        }
        try {
            const updatedQuestion = await Question
                .findOneAndUpdate({ slug }, data, { new: true })
                .exec();
            return res.json(updatedQuestion);
        } catch (error) {
            // TODO...
        }
    }
});
/* DELETE /:slug */
router.delete('/:slug', async function (req, res) {
    const slug = req.params.slug;
    if (slug && slug !== '') {
        try {
            await Question
            .findOneAndRemove({ slug }).exec();
            return res.status(204).json();
        } catch (error) {
            // TODO...
        }
    }
});

module.exports = router;
