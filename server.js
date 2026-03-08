const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

/* MAIN HOME PAGE */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/* TASK FOLDERS */
app.use("/task1-html-server", express.static(path.join(__dirname, "task1-html-server")));
app.use("/task2-form-validation", express.static(path.join(__dirname, "task2-form-validation")));
app.use("/task3-responsive-design", express.static(path.join(__dirname, "task3-responsive-design")));
app.use("/task4-dom-validation", express.static(path.join(__dirname, "task4-dom-validation")));
app.use("/task5-api-crud", express.static(path.join(__dirname, "task5-api-crud")));
app.use("/task7-external-api", express.static(path.join(__dirname, "task7-external-api")));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});