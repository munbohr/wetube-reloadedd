import express from "express";

const PORT = 3000;

const app = express();

const handleListening = () => {console.log(`server Listening on port  http://localhost:${PORT} 🚀 `);}

app.listen(PORT, handleListening);
