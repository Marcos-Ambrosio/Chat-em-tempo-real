import express from "express"
import path from "path"
import http from 'http'
import { Server } from 'socket.io'
import ejs from 'ejs'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

import "./socket.js"

export default io

app.use(express.static(path.join("public")))
app.set("views", path.join("public"))
app.engine("html", ejs.renderFile)
app.set("view engine", "html")

app.use("/", (req, res) => {
    res.render("index.html")
})

server.listen("3000", () => {
    console.log("Servidor rodando")
})