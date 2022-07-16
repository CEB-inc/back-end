This is the backend for our fullstack media-hub application

npm i express
npm i mongoose
npm i cors
npm i --save express-async-handler
npm i jsonwebtoken
- npm i bcryptjs

URLS/routes so far
http://localhost:4000/api/v1/posts
http://localhost:4000/api/v1/posts/:id
http://localhost:4000/api/v1/categories
http://localhost:4000/api/v1/media
http://localhost:4000/api/v1/users       | Fields required: name, email, password | (SIGNUP)
http://localhost:4000/api/v1/users/login | Fields required: email, password | (LOGIN)
http://localhost:4000/api/v1/users/me    | Fields required: email, password | (USER INFO) 

Post object structure

{
        "_id": "62d0f8eb5d04304915836348",
        "user": "62d0e401ce699e948fa2f53d",
        "category": "Blog",
        "media": "Game",
        "title": "Celeste",
        "post": "Celeste Blog post blah blah",
        "score": 0,
        "createdAt": "2022-07-15T05:19:39.587Z",
        "updatedAt": "2022-07-15T05:19:39.587Z",
        "__v": 0
    }

User object structure

{
    "_id": "62d0e401ce699e948fa2f53d",
    "name": "Corey Barker",
    "email": "cbarker@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDBlNDAxY2U2OTllOTQ4ZmEyZjUzZCIsImlhdCI6MTY1Nzg2Mzk0MiwiZXhwIjoxNjYwNDU1OTQyfQ.1WKoa5bo4cxwm4E5RYY26jGJW339thnFuo22BMrXAw0"
}

{
    "_id": "62cf8da2d1a73b36a2f42a8b",
    "name": "Just Brian",
    "email": "brian@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2Y4ZGEyZDFhNzNiMzZhMmY0MmE4YiIsImlhdCI6MTY1Nzk1NjAzNywiZXhwIjoxNjYwNTQ4MDM3fQ._WW9uGH6T-MHkkNWt_Jg2wkptGAt3LgIiKbl-5KrvCM"
}

{
    "_id": "62d0c88582140808f29f076e",
    "name": "Ethan Neyland",
    "email": "ethan@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDBjODg1ODIxNDA4MDhmMjlmMDc2ZSIsImlhdCI6MTY1Nzk1NjA2NSwiZXhwIjoxNjYwNTQ4MDY1fQ.jPo-Mk2efvimYkTsmPiE83rFUV1YLwpMxhF1zSvxibc"
}