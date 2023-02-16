import express from "express";
import { chatSocket } from "./socket/chat.socket.js";

const app = express();

app.set("Port", 4000);

const server = app.listen(app.get("Port"), () => {
  console.log("El servidor está escuchando por el puerto ", app.get("Port"));
});

chatSocket(server);
