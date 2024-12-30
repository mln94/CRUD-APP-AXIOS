const express = require('express');
const app = express();
require("dotenv").config()
const path = require('path');
const mangoConnect = require("./server/connection/connectionMango.js")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))

const routes = require("./server/routes/routes")

app.set("view engine", "ejs")
app.set("views","./views")


app.use("/", routes)


app.listen(process.env.PORT || 3000, console.log("Server is running on port 3000"))