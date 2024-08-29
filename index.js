import express from "express";
import http from "http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));
const f = fileURLToPath(import.meta.url);
console.log(f)
console.log(__dirname)

app.get("", (req, res) => res.sendFile(join(__dirname, "index.html")));

const PORT = 3000;

