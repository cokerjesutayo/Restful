const router = require ("express").Router();
const  {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController")

router.route("/").get(getAllUsers).post(createUser)

router.route("/:userId").get(getSingleUser).patch(updateUser).delete(deleteUser)

module.exports=router