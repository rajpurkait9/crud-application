const express = require('express');
const {
  getAllUser,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controller/user');
const router = express.Router();

router.get('/', getAllUser);
router.get('/:id', getOneUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
