const express = require('express');
const router = express.Router();

const {
  getPeople,
  createpeople,
  postperson,
  updatePerson,
  deletePerson,
} = require('../controllers/people')


router.get('/', getPeople)
router.post('/', createpeople)
router.post('/postman', postperson)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

module.exports = router;