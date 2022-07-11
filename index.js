const express = require("express");

const categories = ["Review", "Blog"];

const app = express();
const port = 4000;

// Homepage: '/' get request. the response: 'res' is to .send an object
app.get("/", (req, res) => res.send({ info: "Back-End API" }));

// Categories page get request. The response is the categories array
app.get("/categories", (req, res) => res.send(categories));


app.listen(port, () => console.log(`App running at http://localhost:${port}/`));
