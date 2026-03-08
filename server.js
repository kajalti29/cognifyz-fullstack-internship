const express = require("express");
const path = require("path");

const app = express();

app.use("/task1", express.static(path.join(__dirname, "task1-html-server/public")));
app.use("/task2", express.static(path.join(__dirname, "task2-form-validation/public")));
app.use("/task3", express.static(path.join(__dirname, "task3-responsive-design/public")));
app.use("/task4", express.static(path.join(__dirname, "task4-dom-validation/public")));
app.use("/task5", express.static(path.join(__dirname, "task5-api-crud/public")));
app.use("/task7", express.static(path.join(__dirname, "task7-external-api/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});