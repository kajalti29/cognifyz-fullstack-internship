const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

/* MAIN HOMEPAGE */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/* TASK ROUTES */
app.get("/task1", (req, res) => {
  res.sendFile(path.join(__dirname, "task1-html-server/index.html"));
});

app.get("/task2", (req, res) => {
  res.sendFile(path.join(__dirname, "task2-form-validation/index.html"));
});

app.get("/task3", (req, res) => {
  res.sendFile(path.join(__dirname, "task3-responsive-design/index.html"));
});

app.get("/task4", (req, res) => {
  res.sendFile(path.join(__dirname, "task4-dom-validation/index.html"));
});

app.get("/task5", (req, res) => {
  res.sendFile(path.join(__dirname, "task5-api-crud/index.html"));
});

app.get("/task7", (req, res) => {
  res.sendFile(path.join(__dirname, "task7-external-api/index.html"));
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});