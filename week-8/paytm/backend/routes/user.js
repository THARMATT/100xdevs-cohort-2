// backend/routes/user.js
const express = require('express');

const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

router.post("/signup", async (req, res) => {
  try {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
      throw new Error("Signup failed");
    }

    const existingUser = await User.findOne({
      username: req.body.username,
    });

    if (existingUser) {
      throw new Error("Email already taken/Incorrect inputs");
    }

    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    const userId = user._id;

    await Account.create({
      userId,
      balance: 1 + Math.random() * 10000,
    });

    const token = jwt.sign({
      userId,
    }, JWT_SECRET);

    res.json({
      message: "User created successfully",
      token: token,
    });
  } catch (error) {
    res.status(411).json({
      message: error.message,
    });
  }
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res) => {
  try {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
      throw new Error("Email already taken / Incorrect inputs");
    }

    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (user) {
      const token = jwt.sign({
        userId: user._id,
      }, JWT_SECRET);

      res.json({
        token: token,
      });
      return;
    }

    throw new Error("Error while logging in");
  } catch (error) {
    res.status(411).json({
      message: error.message,
    });
  }
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.put("/update", authMiddleware, async (req, res) => {
  try {
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
      throw new Error("Error while updating information");
    }

    await User.updateOne(req.body, {
      id: req.userId,
    });

    res.json({
      message: "Updated successfully",
    });
  } catch (error) {
    res.status(411).json({
      message: error.message,
    });
  }
});

router.get("/bulk", async (req, res) => {
  try {
    const filter = req.query.filter || "";

    const users = await User.find({
      $or: [{
        firstName: {
          "$regex": filter,
        },
      }, {
        lastName: {
          "$regex": filter,
        },
      }],
    });

    res.json({
      user: users.map(user => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
      })),
    });
  } catch (error) {
    res.status(411).json({
      message: error.message,
    });
  }
});

module.exports = router;
