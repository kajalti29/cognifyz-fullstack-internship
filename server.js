const express = require("express");
const path = require("path");

const app = express();

app.use("/task1-html-server", express.static(path.join(__dirname,"task1-html-server")));
app.use("/task2-form-validation", express.static(path.join(__dirname,"task2-form-validation")));
app.use("/task3-responsive-design", express.static(path.join(__dirname,"task3-responsive-design")));
app.use("/task4-dom-validation", express.static(path.join(__dirname,"task4-dom-validation")));
app.use("/task5-api-crud", express.static(path.join(__dirname,"task5-api-crud")));
app.use("/task7-external-api", express.static(path.join(__dirname,"task7-external-api")));

app.use(express.static(__dirname));

app.listen(3000,()=>{
console.log("Server running on port 3000");
});