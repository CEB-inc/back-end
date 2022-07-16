const express = require("express");
const router = express.Router();
const PostModel = require("../db/post_model");
const UserModel = require("../db/user_model");
const { protect } = require("../middleware/authMiddleware");
const asyncHandler = require("express-async-handler");

// Posts-page get request.
router.get("/", async (req, res) => {
  // find() with no params will find all. also returns promise hence async/await
  res.send(await PostModel.find());
});

// GET REQUEST INDIVIDUAL POSTS
router.get("/:id", async (req, res) => {
  // if it finds the id it will pass it through 'doc' and err will be undefined. vice versa if it fails to find id
  PostModel.findById(req.params.id, (err, doc) => {
    if (err) {
      res
        .status(404)
        .send({ error: `Could not find post id ${req.params.id}` }); // .send(err) will give error object
    } else {
      res.send(doc);
    }
  });
});

// POST REQUESTS //
router.post("/", protect, async (req, res) => {
  // creates new instance in memory and saves to database // .create returns a promise(could use '.then' but we're using async/await)
  PostModel.create(req.body, (err, doc) => {
    user: req.user.id;
    if (err) {
      res.status(422).send({ error: err.message });
    } else {
      res.status(201).send(doc);
    }
  });
});

// UPDATE REQUESTS //
router.put(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const post = await PostModel.findById(req.params.id);
    const user = await UserModel.findById(req.user.id);

    //Check for user
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    // Make sure the logged in user matches the user who created the post through user id
    if (post.user.toString() !== user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }

    // findByIdAndUpdate 1st param is the one it finds, 2nd param is what it replaces it with. 3rd is options, 4th is (err, doc)
    // returnDocument: 'after' the request otherwise it just returns the old value
    PostModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: "after" },
      (err, doc) => {
        if (err) {
          res.status(422).send({ error: err.message });
        } else {
          res.status(201).send(doc);
        }
      }
    );
  })
);

// DELETE REQUESTS //
router.delete(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const post = await PostModel.findById(req.params.id);
    const user = await UserModel.findById(req.user.id);

    //Check for user
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    // Make sure the logged in user matches the user who created the post
    if (post.user.toString() !== user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }

    PostModel.findByIdAndDelete(req.params.id, (err, doc) => {
      if (err) {
        res.status(422).send({ error: err.message });
      } else {
        res.sendStatus(204);
      }
    });
  })
);

module.exports = router;
