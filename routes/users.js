// Routes for users
import express from "express";
import UserModel from "../models/users.js";

const router = express.Router();

// Insert data into Database using POST method.
router.post("/", async (req, res) => {
  try {
    const addUser = new UserModel(req.body);
    console.log(req.body);
    const saveUser = await addUser.save();
    res.status(201).send(saveUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Get(Read) all users from Database using GET method.
router.get("/", async (req, res) => {
  try {
    const getUsers = await UserModel.find({}).sort({"id" : 1});
    res.status(200).send(getUsers);
  } catch (e) {
    res.status(400).send(e);
  }
});

// GET user by id 
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getUsers = await UserModel.find({ id: `${id}` });
    res.send(getUsers);
  } catch (e) {
    res.status(400).send(e);
  }
});

// UPDATE user by id
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getUser = await UserModel.findOneAndUpdate({ id: `${id}` }, req.body,);
    res.send(getUser);
  } catch (e) {
    res.status(500).send(e);
  }
});

// DELETE user by id
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getUser = await UserModel.deleteOne({ id: `${id}` });
    res.send(getUser);
  } catch (e) {
    res.status(400).send(e);
  }
});
export default router;
