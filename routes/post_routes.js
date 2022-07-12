const express = require("express")
const router = express.Router()
const PostModel = require("../db/post_model");

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
router.post("/", async (req, res) => {
  // creates new instance in memory and saves to database // .create returns a promise(could use '.then' but we're using async/await)
  PostModel.create(req.body, (err, doc) => {
    if (err) {
      res.status(422).send({ error: err.message });
    } else {
      res.status(401).send(doc);
    }
  });
});

// UPDATE REQUESTS //
router.put("/:id", async (req, res) => {
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
        res.status(401).send(doc);
      }
    }
  );
});

// DELETE REQUESTS //
router.delete("/:id", async (req, res) => {
  PostModel.findByIdAndDelete(req.params.id, (err, doc) => {
    if (err) {
      res.status(422).send({ error: err.message });
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = router
