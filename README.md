This is the backend for our fullstack media-hub application

npm i express
npm i mongoose
npm i cors

URLS/routes so far
http://localhost:4000/api/v1/posts
http://localhost:4000/api/v1/posts/:id
http://localhost:4000/api/v1/categories
http://localhost:4000/api/v1/media

Post object structure
{
    _id:	"62cbd3be3610ac7aafdb5c9d"
    category:	"Review",
    media:	"Games",
    title:	"FarCry 21 review",
    post:	"it's crap and blablabalbalblabalbla",
    score:  3,
    __v:	0
}

{
    _id:	"652cbd3be3610ac7aafdb5c7v"
    category:	"blog",
    media:	"Music",
    title:	"Modern hip-hop opinion piece",
    post:	"I think only some artists understand what hip-hop is all about",
    score:  0,
    __v:	
}