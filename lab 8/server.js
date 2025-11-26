const express = require("express");
const app = express();
app.use(express.json());


let posts = [];
let comments = [];
let postIdCounter = 1;
let commentIdCounter = 1;




// =============================
// Create new post
// POST /posts
// =============================
app.post("/post", async (req, res) => {


  const { title, content } = req.body;
  const post = {
    id: postIdCounter++,
    title,
    content
  };

  posts.push(post);
  res.status(201).json(post);
});


// =============================
// Get all posts
// GET /posts
// =============================
app.get("/posts", async (req, res) => {
  res.json(posts);
});


// =============================
// Get specific post
// GET /posts/:id
// =============================
app.get("/posts/:id", async (req, res) => {

  const id = Number(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) return res.status(404).json({ message: "Post not found" });

  res.json(post);
});


// =============================
// Create comment on specific post
// POST /posts/:id/comments
// =============================
app.post("/posts/:id/comments", async (req, res) => {

  const postId = Number(req.params.id);
  const { text } = req.body;

  const post = posts.find(p => p.id === postId);
  if (!post) return res.status(404).json({ message: "Post not found" });

  const comment = {
    id: commentIdCounter++,
    postId,
    text
  };

  comments.push(comment);
  res.status(201).json(comment);
});


// =============================
// Get all comments on a specific post
// GET /posts/:id/comments
// =============================
app.get("/posts/:id/comments", async (req, res) => {

  const postId = Number(req.params.id);

  const postExists = posts.some(p => p.id === postId);
  if (!postExists) return res.status(404).json({ message: "Post not found" });

  const postComments = comments.filter(c => c.postId === postId);
  res.json(postComments);
});


// =============================
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
