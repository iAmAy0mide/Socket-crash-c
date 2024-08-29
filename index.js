import express from "express";
import http from "http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";
import { log } from "console";

const app = express();
const server = http.createServer(app);

const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get("", (req, res) => res.sendFile(join(__dirname, "index.html")));

io.on("connection", (client) => {
    log("User connected to server");

    // EMit a `message` to client
    client.emit("message", "Welcome to the server")

    client.on("disconnect", () => {
        log("User disconnected (server)");
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port:`, PORT);
});
