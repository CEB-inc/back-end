const express = require("express");

const categories = ["Review", "Blog"];
const media = ["Music", "Games", "Movies"];
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices mi tempus imperdiet nulla malesuada. Bibendum neque egestas congue quisque egestas diam in arcu. Turpis in eu mi bibendum neque egestas congue. Commodo nulla facilisi nullam vehicula. Mattis ullamcorper velit sed ullamcorper morbi. Ut tellus elementum sagittis vitae et leo duis ut. A arcu cursus vitae congue. Porta lorem mollis aliquam ut porttitor leo a diam. Etiam tempor orci eu lobortis elementum nibh. Curabitur vitae nunc sed velit dignissim sodales. Ipsum dolor sit amet consectetur adipiscing elit ut. Commodo quis imperdiet massa tincidunt nunc pulvinar. Fermentum iaculis eu non diam. At urna condimentum mattis pellentesque id nibh tortor id. Sit amet aliquam id diam maecenas ultricies mi eget. Nisl nisi scelerisque eu ultrices. Eget nunc lobortis mattis aliquam faucibus purus in. Vel eros donec ac odio tempor orci dapibus ultrices. Vel quam elementum pulvinar etiam non quam lacus."
const posts = [
    { category: "Review", media: "Movies", title: "Review of the new Batman!", post: lorem, score: "8" },
    { category: "Blog", media: "Music", title: "The new generation of hip-hop sucks", post: lorem },
    { category: "Blog", media: "Games", title: "Elden Ring is the weakest of the souls games", post: lorem }
]

// 
const app = express();
// Setting port number
const port = 4000;

// 'use' activating express.json() - a middleware, at this part in the code.
// This does a JSON.parse on inc request body. and sets a req.body for use with our post.
app.use(express.json())

// GET REQUESTS //
// Homepage: '/' get request. the response: 'res' is to .send an object
app.get("/", (req, res) => res.send({ info: "Back-End API" }));
// Categories page get request. The response is the categories array
app.get("/categories", (req, res) => res.send(categories));
// submissions page get request. The response is the categories array
app.get("/posts", (req, res) => res.send(posts));
// REQUEST FOR INDIVIDUAL POSTS, based on params.id
app.get("/posts/:id", (req, res) => res.send(posts[req.params.id]))

// POST REQUESTS //
app.post("/posts", (req, res) => {
    const post = {
        category: req.body.category,
        media: req.body.media,
        title: req.body.title,
        post: req.body.post,
        score: req.body.score
    }
    // adding this object into posts array
    posts.push(post)
    // send back a status code 201 with the headers, send(post) sends the body. // sendStatus(200) for just status code
    res.status(201).send(post)
})

app.listen(port, () => console.log(`App running at http://localhost:${port}/`));
