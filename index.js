const dotenv = require('dotenv')
// dotenv reads, loads and sets our environment variables in 'process.env' and is GLOBAL
dotenv.config()

const express = require("express");
const cors = require('cors')
// grabbing routes
const apiV1Routes = require('./routes')

// async error handler
const { errorHandler } = require('./middleware/errorMiddleware')

// assigning express to a variable to use
const app = express();
// Setting port number
const port = process.env.PORT || 4000;

// cors middleware. for allowing front end access to data
app.use(cors())

// 'use' activating express.json() - a middleware, at this part in the code.
// This does a JSON.parse on inc request body. and sets a req.body for use with our post.
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Routes / URL request list
// 1st param Prefixing each route with /posts // 2nd param getting all /post routes from ./routes/post_routes.js. 
// app.use('/api/v1/posts', postRoutes) // Old model
app.use('/api/v1', apiV1Routes) // this gets all routes from /routes/index no need to prefix.

// Overwrites default express error handler (try, catch)
app.use(errorHandler)

app.listen(port, () => console.log(`App running at http://localhost:${port}/`));
