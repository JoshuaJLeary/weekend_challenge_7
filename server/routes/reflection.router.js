const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();

//GET route to DB table "reflection"/ Getting all reflections
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "reflection"`;
    pool.query(queryText)
    .then( (result) => {
        res.send(result.rows);
    })
    .catch( (error) => {
        console.log('Error in GET:', error);
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    const postReflection = req.body;
    const queryText = `INSERT INTO reflection ("topic", "description") VALUES ($1, $2)`;
    pool.query(queryText, [postReflection.topic, postReflection.description])
    .then( (result) => {
        console.log('received POST', result);
        res.sendStatus(200);
    })
    .catch( (error) => {
        console.log('error in POST', error);
        res.sendStatus(500);
    })
})

router.put('/:id', (req, res) => {
    let id = req.params.id;
    console.log('PUT route bookmark', id);
    let queryText = `UPDATE reflection SET bookmarked = NOT bookmarked WHERE id = ${id}`;
    pool.query(queryText)
    .then( (result) => {
        console.log('successful PUT bookmark', result);
        res.sendStatus(200);
    })
    .catch( (error) => {
        console.log('error in PUT bookmark', error);
        res.sendStatus(500);
    })
})

module.exports = router;