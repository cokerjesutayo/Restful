const USER = require("../models/users");

// get user
const getAllUsers = async (req, res) => {
  try {
    const users = await USER.find().sort("-createdAt");
    res.status(200).json({ success: true, numOfUsers: users.length, users });
  } catch (error) {
    console.log(error.message);
    res.status(error.status || 500).json({ error: error.message });
  }
};

const getSingleUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await USER.findById({ _id: userId });
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error.message);
    res.status(error.status || 500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  const { fullname, description, projectdone } = req.body;
  if (!fullname || !description || !projectdone) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  try {
    const user = await USER.create(req.body);
    res.status(201).json({ success: true, user });
  } catch (error) {
    console.log(error);
    console.log(error.code);
    if (error.code === 11000) {
      return res.status(400).json({ error: "This name has been registered" });
    }

    res.status(error.status || 500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await USER.findByIdAndUpdate({ _id: userId }, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error.message);
    res.status(error.status || 500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;
  await USER.findByIdAndDelete({ _id: userId });
  res.status(200).json({ success: true, message: "User deleted" });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
