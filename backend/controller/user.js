const UserManagement = require('../model/user-schema');

const getAllUser = async (req, res) => {
  try {
    const user = await UserManagement.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(`something failed at server side 
        {${error}}`);
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await UserManagement.findById(id);
    res.status(200).json(findUser);
  } catch (error) {
    res.status(500).send(`something failed at server side
        {${error}}`);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await UserManagement.create(req.body);
    res.status(200).json(`user create sucessfully user:{${newUser}} `);
  } catch (error) {
    res.status(500).send(`something failed at server side 
      {${error}}`);
  }
};

const updateUser = async (req, res) => {
  try {
    const updateDate = { name: req.body.name, active: req.body.active };
    const filter = { id: req.params.id };
    const updateUser = await UserManagement.findOneAndUpdate(
      filter,
      updateDate,
      { new: true }
    );
    console.log(updateUser);
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).send(`something failed at server side 
    {${error}}`);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await UserManagement.findByIdAndDelete(id);
    const newMembers = await UserManagement.find();
    res.status(200).json(newMembers);
  } catch (error) {
    res.status(500).send(`something failed at server side 
      {${error}}`);
  }
};

module.exports = { getAllUser, getOneUser, createUser, updateUser, deleteUser };
