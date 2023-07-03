const express = require('express');
const router = express.Router();

const { addPeople, getPeople, updatePeople, getPeopleID, deletePerson} = require('../controllers/people.js')


router.get('/', getPeople )
router.get('/:id', getPeopleID)
router.post('/', addPeople )
router.put('/:id', updatePeople)
router.delete('/:id', deletePerson)
module.exports = router